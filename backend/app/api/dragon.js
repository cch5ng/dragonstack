const { Router } = require('express');
const DragonTable = require('../dragon/table');

const router = Router();

router.get('/new', (req, res, next) => {
	const dragon = req.app.locals.engine.generation.newDragon();

	DragonTable.storeDragon('foo')///dragon)
		.then(({ dragonId }) => {
			console.log('dragonId', dragonId);
			dragon.dragonId = dragonId;
		  res.json({
    		dragon 
  		});
		})
			.catch(err => next(err))
});

module.exports = router;
