const pool = require('../../databasePool');

class GenerationTable {
	static storeGeneration(generation) {
		pool.query(
			'INSERT INTO generation(expiration) VALUES($1)',
			[generation.expiration],
			(err, resp) => {
				if (err) return console.error(err);
			}
		);
	}
}

module.exports = GenerationTable;