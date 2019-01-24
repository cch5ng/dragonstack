const pool = require('../../databasePool');
const TraitTable = require('../trait/table');

class DragonTraitTable {
	static storeDragonTrait({ dragonId, traitType, traitValue }) {
		return new Promise((resolve, reject) => {
			TraitTable.getTraitId({ traitType, traitValue })
				.then(({ traitId }) => {
					pool.query(
						`INSERT INTO dragonTrait("dragonId", "traitId")
							VALUES($1, $2)`,
						[dragonId, traitId],
						(error, response) => {
							if (error) return reject(error);

							resolve();
						}
					)				
				})
				.catch(error => console.error('error', error))




		})




	}
}

module.exports = DragonTraitTable;
