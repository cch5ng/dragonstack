const Dragon = require('./dragon');

const hiccup = new Dragon({
  birthdate: new Date(),
  nickname: 'hiccup',
});

const toothless = new Dragon({
  birthdate: new Date(),
  nickname: 'toothless',
});

const mishy = new Dragon();

setTimeout(() => {
    const adrn = new Dragon();
    console.log('adrn', adrn);
}, 3000);

console.log('hiccup',  hiccup);
console.log('toothless', toothless);
console.log('mishy', mishy);