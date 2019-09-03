
//Juan 1st part solutions


function createBand(clothing, lastFoodEaten) {
  return `name of our band is ${clothing + lastFoodEaten}`;
}
console.log(createBand("shirt", "peach"));

function newBand(fruit, car) {
  const fruitUpperCase = fruit[0].toUpperCase() + fruit.substring(1);
  const carUppercase = car[0].toUpperCase() + car.substring(1);
  return `name of our new band is ${fruitUpperCase} ${carUppercase}`;
}
console.log(newBand("banana", "peugeot"));

function nameSelector() {
  const classMates = ["Fede", "Jaime", "Juan", "Fran", "Natalia", "Manuel"];
  const getName = classMates[Math.floor(Math.random() * 5)];
  return `and the person selected is ${getName}`;
}
console.log(nameSelector());

//Juan 2nd part solutions

function generateBandName(clothingColor,lastFoodEaten) {
  clothingColor = capitalizeColor(clothingColor);
  lastFoodEaten = capitalizeFood(lastFoodEaten);
  return `${clothingColor} ${lastFoodEaten}`;
   }
function capitalizeFood(lastFoodEaten) {
  lastFoodEaten = lastFoodEaten[0].toUpperCase() + lastFoodEaten.substring(1);
  return lastFoodEaten;
}   
function capitalizeColor(clothingColor) {
  clothingColor = clothingColor[0].toUpperCase() + clothingColor.substring(1);
  return clothingColor;
}
console.log(generateBandName("clothingColor", "lastFoodEaten"));





function capitalizeInitial(crimson) {
  crimson = crimson[0].toUpperCase() + crimson.substring(1);
  return crimson;
}   
function capitalizeInitial(kebab) {
  kebab = kebab[0].toUpperCase() + kebab.substring(1);
  return kebab;
}
console.log(capitalizeInitial("crimson", "kebab"));

// This one above is not finished




function makeTasty(color) {
  let tastyColor = '';

  switch (color) {
    case 'Red':
      tastyColor = 'Chilli';
      break;
    case 'Orange':
      tastyColor = 'Tangerine';
      break;
    case 'Yellow':
      tastyColor = 'Pineapple';
      break;
    case 'Green':
      tastyColor = 'Sage';
      break;
    case 'Blue':
      tastyColor = 'Blueberry';
      break;
    case 'Purple':
      tastyColor = 'Plum';
      break;
    default:
      tastyColor = color;
  }


  return tastyColor;
}
console.log(makeTasty('Blue'));
console.log(makeTasty('Purple'));