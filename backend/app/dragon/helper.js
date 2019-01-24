const pool = require('../../databasePool');

const getDragonWithTraits = ({ dragonId }) => {

	return Promise.all([
		DragonTable.getDragon({ dragonId })


	])


	// return new Promise((resolve, reject) => {
	// 	pool.query(
	// 		`SELECT dragon.birthdate, dragon.nickname, dragon."generationId",dragonTrait."dragonId",
	// 			dragonTrait."traitId", trait."traitType", trait."traitValue"
	// 			FROM dragon
	// 			WHERE id = dragonId
	// 			INNER JOIN dragonTrait on dragonTrait."dragonId" = dragon.id
	// 			INNER JOIN trait on trait.id = dragonTrait."traitId"`,
	// 		[],
	// 		(err, resp) => {
	// 			if (err) return reject(err);

	// 			// here I'm unclear about the requirement
	// 			// am I supposed to retrieve a random dragon and why/where is it going to get used
	// 			// not positive what should be returned, an array of dragon objects
	// 			// like /app/dragon/index.js?


	// 		}
	// 	)
	// })
}
