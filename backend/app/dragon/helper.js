const pool = require('../../databasePool');
const DragonTable = require('./table');
const Dragon = require('./index');

const getDragonWithTraits = ({ dragonId }) => {
	return Promise.all([
		DragonTable.getDragon({ dragonId }),
		new Promise((resolve, reject) => {
			pool.query(
				`SELECT "traitType", "traitValue"
					FROM trait 
					INNER JOIN dragonTrait
					ON dragonTrait."traitId" = trait.id
					WHERE dragonTrait."dragonId" = $1`,
				[dragonId],
				(err, resp) => {
					if (err) return reject(err);

					resolve(response.rows);
				}
			)
		})
	])
		// review how you know what the returned values will be
		.then(([dragon, dragonTraits]) => {
			// return instance of already defined Dragon class
			return new Dragon({ ...dragon, dragonId, traits: dragonTraits })
		})
		.catch(err => console.error('error', err))
}

//test
getDragonWithTraits({ dragonId: 1});

module.exports = { getDragonWithTraits };