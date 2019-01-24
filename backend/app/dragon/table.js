const pool = require('../../databasePool');
const DragonTraitTable = require('../dragonTrait/table');

class DragonTable {
	static storeDragon(dragon) {
		const { generationId, birthdate, nickname } = dragon;

		return new Promise((resolve, reject) => {
			pool.query(
				`INSERT INTO dragon("generationId", birthdate, nickname) 
					VALUES($1, $2, $3) RETURNING id`,
				[generationId, birthdate, nickname],
				(err, resp) => {
					if (err) return reject(err);

					const dragonId = resp.rows[0].id;

					// reason for Promise.all is resolve() should not be called until all
					// promises (for all traits) have resolved
					Promise.all(
						// .map() returns array of promises
						dragon.traits.map(({ traitType, traitValue }) => {
							return DragonTraitTable.storeDragonTrait({ dragonId, traitType, traitValue })
						})
					)
						.then(() => resolve({ dragonId }))
						.catch(error => reject(error))
				}
			)
		});
	}

	// he uses a pattern where params are always objects, even if only one param/prop passed in
	static getDragon({ dragonId }) {
		return new Promise((resolve, reject) => {
			pool.query(
				`SELECT nickname, birthdate, "generationId"
					FROM dragon
					WHERE dragon.id = $1`,
				[dragonId],
				(err, resp) => {
					if (err) return reject(err);

					if (resp.rows.length === 0) {
						return reject(new Error('no dragon'));
					}

					resolve(resp.rows[0]);
				}
			)
		});
	}
}

// test
// DragonTable.getDragon({ dragonId: 1 })
// 	.then(dragon => console.log('dragon', dragon))
// 	.catch(err => console.error('error', err));

module.exports = DragonTable;