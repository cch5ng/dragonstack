const express = require('express');
const GenerationEngine = require('./engine');

const port = 3000;
const app = express();
const engine = new GenerationEngine();
engine.start();

app.get('/dragon/new', (req, res) => {
  res.json({
    dragon: engine.generation.newDragon()
  });
});

app.listen(port, console.log(`listening on port ${port}`));