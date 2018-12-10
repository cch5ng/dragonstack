/*
Create a Generation Engine. Do so with a class called GenerationEngine. The engine will need to create a new generation object when the previous one has expired.

Hints:

Keep track of the current generation using `this.generation` in the class.

A `newGeneration` method could come in handy. This would make a generation object, setting it to `this.generation`.

Consider using `setTimeout` to schedule calls to `newGeneration` in a timely manner.

Recursion may come in handy (be careful to avoid infinite loops).
*/

const Generation = require('./generation');

class GenerationEngine {
  
  constructor(generation) {
    this.generation = null;
    this.timer = null;
  }
  
  start() {
    this.buildNewGeneration();
  }
  
  stop() {
    // purpose is to clear the timeout
    clearTimeout(this.timer); // node api func
  }
  
  buildNewGeneration() {
    this.generation = new Generation();
    console.log('generation', this.generation);
    this.timer = setTimeout(
      () => this.buildNewGeneration(),
      this.generation.expiration.getTime() - Date.now()
    );
  }
  
}

module.exports = GenerationEngine;
