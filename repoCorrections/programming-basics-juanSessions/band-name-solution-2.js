// Band name solution 2.4 (spice up the colors)

// Declare a place to store results
console.log();
const bandNames = []; //  an Array
console.log(bandNames);

// Some examples with console.log()
console.log(generateBandName('blACK', 'spAGhetti')); // Replace values to this parameters
console.log(generateBandName('RED', 'cookies'));

// Some examples without console.log()
generateBandName('blue', 'ciabaTTas');
generateBandName('purple', 'PASTA');

// Show contents of the array
console.log(bandNames);

// Test yourself: Can you explain why we are able to
// call generateBandName before we declare it?
// For a refresher, see comments in the previous version of this file.

/**
 * Generate a band name based on the user's clothing color
 * and the last food they ate
 * 
 * Store the result of each call in a global array,
 * then return it.
 * 
 * @param {string} clothingColor 
 * @param {string} lastFoodEaten
 * 
 * @return {string} bandName
 * 
 * @example
 * 
 *  generateBandName('RED', 'cookies')
 */

function generateBandName(clothingColor, lastFoodEaten) {
  console.log();
    let bandName = ''; // a String
  console.log(bandName);

  // To keep things DRY, let's use just one function that does a very general job
  
  console.log();
  let color = makeTasty(capitalizeInitial(clothingColor)); //Capitalize the first letter of the clothingColor
  console.log(color);

  console.log();
  let food = capitalizeInitial(lastFoodEaten); // capitalize the first letter of the lastFoodEaten
  console.log(food);

  // use the formatted inputs to build the return value
  console.log();
  bandName = `The ${color} ${food}!`; // a String with values of color and food 
  console.log(bandName);

  // update the global array
  bandNames.push(bandName); 
  
  // Test yourself: To where does this value get returned?
  return bandName;
}

function capitalizeInitial(rawString) {
  // Test yourself: To where does this value get returned?
  return rawString[0].toUpperCase() + rawString.substr(1).toLowerCase();
}
<<<<<<< HEAD
=======
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





/**
 * Make a boring color delicious!
 * 
 * @param {string} color
 * @return {string} tastyColor
 * 
 * @example
 * 
 *  makeTasty('Red')
 */
function makeTasty(color) {
  let tastyColor = ''; // a String
  console.log(tastyColor);

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
