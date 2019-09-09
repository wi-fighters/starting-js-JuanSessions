function createBand(clothing, lastFoodEaten) {
  return `name of our band is ${clothing + lastFoodEaten}`;
}
console.log(createBand("shirt", "peach"));

function newBand(fruit, car) {
  const fruitUpperCase = fruit[0].toUpperCase() + fruit.substring(1);rm 
  const carUppercase = car[0].toUpperCase() + car.substring(1);
  return `name of our new rock band is ${fruitUpperCase} ${carUppercase}`;
}
console.log(newBand("banana", "peugeot"));

function nameSelector() {
  const classMates = ["Fede", "Jaime", "Juan", "Fran", "Natalia", "Manuel"];
  const getName = classMates[Math.floor(Math.random() * 5)];
  return `and the person selected is ${getName}`;
}
console.log(nameSelector());
