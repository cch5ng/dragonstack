const pool = require('../../databasePool');
const TraitTable = require('../trait/table');

class DragonTraitTable {
	static storeDragonTrait(dragonId, traitType, traitValue) {
		// TraitTable.getTraitId()
		// pool.query(
		// 	`INSERT INTO dragonTrait("dragonId", "traitId")
		//		VALUES($1, $2)`,
		//	[dragonId, traidId],
		//	(error, response) => {
		//		if (error) console.error(error);

		//			
		//	}
		//)


	}
}

module.exports = DragonTraitTable;
