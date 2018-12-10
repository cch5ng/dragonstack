const express = require('express');
const GenerationEngine = require('./generation/engine');
const dragonRouter = require('./api/dragon');

const app = express();
const engine = new GenerationEngine();

app.use('/dragon', dragonRouter);

engine.start();

module.exports = app;
