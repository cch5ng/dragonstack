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
    this.generation = generation;
  }
  
  newGeneration() {
    this.generation = new Generation();
  }
  
  checkGenerationExpired() {
    if (Date.now() > this.generation.expiration) {
      this.newGeneration();
    } else {
      setTimeout(() => {
        this.checkGenerationExpired();
      }, 5000)
    }
  }
}

module.exports = GenerationEngine;
