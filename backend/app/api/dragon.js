const { Router } = require('express');
const DragonTable = require('../dragon/table');

const router = Router();

router.get('/new', (req, res) => {
	const dragon = req.app.locals.engine.generation.newDragon();

	DragonTable.storeDragon(dragon)
		.then(({ dragonId }) => {
			console.log('dragonId', dragonId);
			dragon.dragonId = dragonId;
		  res.json({
    		dragon 
  		});
		})
			.catch(err => console.error('error', err))

});

module.exports = router;
