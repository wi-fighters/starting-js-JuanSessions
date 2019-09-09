//if is a boolean expression evaluation

const mySentence = ["hey", "here", "is", "a", "sentence", "in", "parts"];
console.log(mySentence[4]);
// it print the 4th index of the array.

//multidimensional
const board = [[null, "o", "x"], ["x", "o", null], [null, null, null]];

const players = ["Juan", "Natalia"];

console.log(`${players[0]} makes a move\n`);
console.log(board);

const wantMilk = true;
console.log(getCoffee(wantMilk)); //wantMilk is true

function getCoffee(firstArgument) {
  if (!firstArgument) {
    // !exclamation mark means not true
    return `Here's your black coffee`;
  } else {
    return `Here's your flat milk`;
  }
}
