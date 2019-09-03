
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
  lastFoodEaten = lastFoodEaten[0].toUpperCase() + lastFoodEaten.substring(1).toLowerCase();
  return lastFoodEaten;
}   
function capitalizeColor(clothingColor) {
  clothingColor = clothingColor[0].toUpperCase() + clothingColor.substring(1).toLowerCase();
  return clothingColor;
}
console.log(generateBandName("strapon", "CHICKEN"));





function generateBandName(clothingColor,lastFoodEaten) {
  let Color = clothingColor[0].toUpperCase() + clothingColor.substring(1).toLowerCase();
  let Food = lastFoodEaten[0].toUpperCase() + lastFoodEaten.substring(1).toLowerCase();
  return `${Color} ${Food}`;
   }

console.log(generateBandName("crimson", "KEBAB"));

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