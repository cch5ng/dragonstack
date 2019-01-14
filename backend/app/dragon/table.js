const pool = require('../../databasePool');

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

					resolve({ dragonId });
				}
			)
		})
	}
}

module.exports = DragonTable;