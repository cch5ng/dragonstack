const pool = require('../../databasePool');

class GenerationTable {
	static storeGeneration(generation) {
		// goal is return generationId to calling function
		return new Promise((resolve, reject) => {
			pool.query(
				'INSERT INTO generation(expiration) VALUES($1) RETURNING id',
				[generation.expiration],
				(err, resp) => {
					if (err) return reject(err);

					const generationId = resp.rows[0].id;

					resolve({ generationId });
				}
			);
		})

	}
}

module.exports = GenerationTable;