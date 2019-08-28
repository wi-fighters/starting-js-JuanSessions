//Write a function named tellFortune that:
//takes 4 arguments: number of children, partner's name, geographic location, job title.
//outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
//Call that function 3 times with 3 different values for the arguments.

function tellFortune(numberOfChildren, partnerName, geoLocation, jobTitle) {
  console.log(numberOfChildren, partnerName, geoLocation, jobTitle);
  //1st parameter has to be: {number}, the second: {string}, 3rd: a  string and the 4th: a string too.
  //const fortune = "You will be a ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${numberOfChildren} kids.";

  return `You will be a ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${numberOfChildren} kids.`;
}
console.log(tellFortune(5, "Susan", "someplace", "best job ever"));

//   The Puppy Age Calculator
//The Puppy Age Calculator
//You know how old your dog is in human years, but what about dog years ? Calculate it!

//Write a function named calculateDogAge that:
//takes 1 argument: your puppy's age.
//calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
//outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
//Call the function three times with different sets of values.
//   Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.

function calculateDogAge(puppyAge) {
  let ageCalculator = puppyAge * 7;
  return `Your doggie is ${ageCalculator} years old in dog years!`;
}
console.log(calculateDogAge(14));
console.log(calculateDogAge(9));
console.log(calculateDogAge(3));

//The Lifetime Supply Calculator
//Ever wonder how much a "lifetime supply" of your favorite snack is ? Wonder no more!

//Write a function named calculateSupply that:
//takes 2 arguments: age, amount per day.
//calculates the amount consumed for rest of the life(based on a constant max age).
//outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
//Call that function three times, passing in different values each time.
//   Bonus: Accept floating point values for amount per day, and round the result to a round number.

function calculateSupply(age, amountPerDay) {
  const maxAge = 100;
  let consumAmount = maxAge - age + amountPerDay * 365;
  return `You will need ${consumAmount} to last you until the ripe old age of ${age}`;
}
console.log(calculateSupply(50, 5));
console.log(calculateSupply(40, 6));
console.log(calculateSupply(30, 7));

//The Geometrizer
//Create 2 functions that calculate properties of a circle, using the definitions here.

//Create a function called calcCircumfrence:

//Pass the radius to the function.
//Calculate the circumference based on the radius, and output "The circumference is NN".
//Create a function called calcArea:

//Pass the radius to the function.
//Calculate the area based on the radius, and output "The area is NN".

function calcCircumfrence(radius) {
  let circCalc = 2 * Math.PI * radius;
  return `The circumference is ${circCalc}`;
}

console.log(calcCircumfrence(2));

function calcArea(radius) {
  let area = Math.PI * radius * radius;
  return `The area is ${area}`;
}
console.log(calcArea(5));
console.log(calcArea(10));
console.log(calcArea(50));
