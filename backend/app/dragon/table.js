const pool = require('../../databasePool');

class DragonTable {
	static storeDragon(dragon) {
		return new Promise((resolve, reject) => {
			pool.query(
				'SQL',
				[dragon.generationId, generation.birthdate, generation.nickname, generation.traits],
				(err, resp) => {
					if (err) return reject(err);

					
				}

			)




		})



	}
}

modules.exports = DragonTable;