const GenerationEngine = require('./engine');

const engine = new GenerationEngine();
engine.start();

setTimeout(() => {
  engine.stop();
}, 20000);

// const Generation = require('./generation');
// const Engine = require('./engine');

// const generation = new Generation();
// console.log('generation', generation);

// const engine = new Engine();
// engine.start();

// const toothless = generation.newDragon();
// console.log('toothless', toothless);


// const Dragon = require('./dragon');

// const hiccup = new Dragon({
//   birthdate: new Date(),
//   nickname: 'hiccup',
// });

// const toothless = new Dragon({
//   birthdate: new Date(),
//   nickname: 'toothless',
// });

// const mishy = new Dragon();

// setTimeout(() => {
//     const adrn = new Dragon();
//     console.log('adrn', adrn);
// }, 3000);

// console.log('hiccup',  hiccup);
// console.log('toothless', toothless);
// console.log('mishy', mishy);