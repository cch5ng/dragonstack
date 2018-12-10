const { Router } = require('express');

const router = Router();

router.get('/new', (req, res) => {
  res.json({
    dragon: req.app.locals.engine.generation.newDragon()
  });
});

module.exports = router;
