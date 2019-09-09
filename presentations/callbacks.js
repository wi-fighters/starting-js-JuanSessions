// /**
//  * convertFromEur can use any currency converter you like
//  * (passed in as a callback) to calculate a conversion from EUR.
//  *
//  * The result will be logged to the console as a human-readable string.
//  *
//  * @param {number} eur - The amount of EUR to convert from. Will be converted to integer
//  * @param {function} converter -  should accept the amount of EUR as an inte
//  *
//  * @example
//  *
//  *     convertFromEur(eurAmount, getJpyFromEur);
//  */
// const convertFromEur = (eur, converter) => {
//   console.log("\nWelcome to the foreign exchange office!");

//   console.log(`
//     rounding to nearest integer...
//     summoning accounting goblins...
//     dividing by the square root of infinity...
//     adjusting for inflation...
//   `);

//   const roundEur = Math.round(eur);

//   console.log(`EUR ${roundEur} will buy you ${converter(roundEur)}`);
// };

// /**
//  * getJpyFromEur will calculate JPY from an integer amount of EUR.
//  *
//  * @param {number} eur - The integer amount of EUR to convert from
//  * @return {string} - The converted amount in JPY prefixed by the currency code
//  *
//  * @example
//  *
//  *     getJpyFromEur(160);
//  */
// const getJpyFromEur = eur => {
//   // 1 EUR = 116.402 JPY
//   const jpy = ((eur * 116402) / 1000).toFixed(2);
//   return `JPY ${jpy}`;
// };

// /**
//  * getAudFromEur will calculate AUD from an integer amount of EUR.
//  *
//  * @param {number} eur - The integer amount of EUR to convert from
//  * @return {string} - The converted amount in AUD prefixed by the currency code
//  *
//  * @example
//  *
//  *     getAudFromEur(160);
//  */
// const getAudFromEur = eur => {
//   // 1 EUR = 1.62072 AUD
//   const aud = ((eur * 162072) / 100000).toFixed(2);
//   return `AUD ${aud}`;
// };

// /**
//  * getChfFromEur will calculate CHF from an integer amount of EUR.
//  *
//  * @param {number} eur - The integer amount of EUR to convert from
//  * @return {string} - The converted amount in CHF prefixed by the currency code
//  *
//  * @example
//  *
//  *     getChfFromEur(160);
//  */
// const getChfFromEur = eur => {
//   // 1 EUR = 1.08329 CHF
//   const chf = ((eur * 108329) / 100000).toFixed(2);
//   return `CHF ${chf}`;
// };

// // To imagine a real-world example, let's pretend we're accepting user input from a web form.

// // When asked "How many EUR would you like to convert?"
// // imagine they entered this amount into a text box:
// const eurAmount = 105;

// // When asked "Which currency would you like to buy?"
// // imagine they had three buttons to choose from.

// // Depending on the button chosen by the user,
// // the main function (converFromEur) would need to call a different converter.
// // We can tell the main function which converter function to use by passing it as a callback.

// // The JPY button would trigger this function call:
// convertFromEur(eurAmount, getJpyFromEur);

// // The AUD button would trigger this function call:
// convertFromEur(eurAmount, getAudFromEur);

// // The CHF button would trigger this function call:
// convertFromEur(eurAmount, getChfFromEur);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Now: how to put callbacks in this solutions?

function convertFromEur(amount, curr, onlyTwoDecimals) {
  result = 0; // the result will be a number
  switch (curr) {
    case "JPY":
      result = getJpyFromEur(amount);
      break;
    case "AUD":
      result = getAudFromEur(amount);
      break;
    case "CHF":
      result = getChfFromEur(amount);
      break;
    default:
      return `The requested currency is not available. Please enter JPY, AUD or CHF`;
  }
  return onlyTwoDecimals(result);
}

// function declaration syntax
//amount here is not a value, is a place holder (Juan's notation)
const getJpyFromEur = amount => {
  // 1 EUR = 116.402 JPY
  const rate = 116.402;
  return amount * rate;
};

// function expression syntax (old school, most widely supported)
const getAudFromEur = amount => {
  // 1 EUR = 1.62072 AUD
  const rate = 1.62072;
  return amount * rate;
};

// arrow function expression syntax (new in ES6)
const getChfFromEur = amount => {
  // 1 EUR = 1.08329 CHF
  const rate = 1.08329;
  return amount * rate;
};

const roundingNumber = number => {
  return number.toFixed(2);
};

console.log(convertFromEur(100, "AUD", roundingNumber));
console.log(convertFromEur(200, "JPY", roundingNumber));
console.log(convertFromEur(100, "CAD", roundingNumber));
console.log(convertFromEur(200, "CHF", roundingNumber));
