const { Router } = require('express');

const router = Router();

router.get('/new', (req, res) => {
  res.json({
    dragon: engine.generation.newDragon()
  });
});

module.exports = router;
