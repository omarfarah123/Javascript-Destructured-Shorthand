//functionality shorthand
const car =  {
  name: 'Toyota Camry',
  age: 2012,
  color: 'Green',
  engine: '2.5 L 4-cylinder',
  reviews(){
    console.log('Gas efficant Car with long term functionality');
  }
}

const { engine } = car;

console.log(engine);