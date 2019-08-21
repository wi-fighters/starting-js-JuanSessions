// 1. Characters & Properties

// Declare a variable and assign a string as a value. Make sure that the string is at least six characters long. Print the length to the console. Access and print the 2nd and 6th elements of the string.

const name = "Natalia"; // I declared a variable with the value "Natalia" (string)
console.log(`Name length is ${name.length}`); // I print with the property ".length" how many characters my string has: 7
const secondElem = name[1]; // Here I look with index=1 for the second character of the string, since we start counting from nill (String indexes are zero-based), and declare a variable with that value
const sixthElem = name[5]; // Here I look with index=5 for the sixth character of the string and declare a variable with that value
console.log(`2nd element: ${secondElem}, 6th element: ${sixthElem}`); // I print both new variables in a "string literal" (which are strings and placeholders within backticks `.....`)

// 2. JS

// Declare a variable and assign the value JavaScript to the variable. Print the length of the string to the console, then print the J & S characters to the console.

const js = "JavaScript"; // First of all I declare the variable js
console.log(`The length of the string is: ${js.length} characters`); // I extract the total number of characters of the string with the property ".length"
const letterJ = js[0]; // I declare a variable with the value of the first character of my string: "J" (since we start counting from nill)
const letterS = js[4]; // I declare a variable with the value of the fifth character of my string: "S" (since we start counting from nill)
console.log(`${letterJ} & ${letterS}`); // I print both variables within a string literal using string interpolation

// 3. I can...

// Declare a variable with the value of "I can walk in the park all day!". Print the word "park" to the console.

// const sentence = "I can walk in the park all day!";
// console.log(`${sentence.substring(18, 22)}`);

const sentence = "I can walk in the park all day!"; // I declare a variable with the value of the string that was given
const goal = sentence.includes("park"); // I declare another variable. I use the method ".includes()" to create a boolean by "asking" the string "sentence" if the word "park" is inside it
const park = goal ? "park" : "keep trying"; // I declare a variable whose value is a conditional ternary operator: if the string includes the word "park", print "park", if it doesn't, then print "keep trying"
console.log(park); // I ask the console to print the variable "park" and it will return "true"

//4. aSc

// Declare a variable with the value JavaScript. Use string methods to print the the characters aSc from your declared variable.

const jsWord = "JavaScript"; // I declare a variable called jsWord with a string value: "JavaScript"
console.log(`${jsWord.substring(3, 6)}`); // I use the method ".substring()" to extract from the 4th until the 6th character. Since we start counting from nill we get "aSc" because the index number 6 ("r") won't be included

// 5. Upper Case

// Declare a variable with the value of Hello World. Covert the value to upper case and print the converted value to the console.

const helloWorld = "Hello World"; // I declare the variable
console.log(helloWorld.toUpperCase()); // I use the method ".toUpperCase()" following the name of the variable in order to put the whole string in uppercase

// 6. Lower Case

// Declare another variable with the value of Hello Earthling. Convert the value to lower case and print the converted value to the console.

const anotherWorld = "Hello Earthling"; // I declare the variable
console.log(`${anotherWorld.toLowerCase()}`); // I use the method ".toLowerCase()" following the name of the variable in order to put the whole string in lowercase

// 7. Does it contain...?

// Check if the words nice shoes contains the letter l or n.

const shoes = "nice shoes"; // I declare the variable
console.log(`Does the string include a "l"? ${shoes.includes("l")}
Does the string include a "n"? ${shoes.includes("n")}`); // I use a string literal to write a string and placeholders for the variables. I use the method ".includes()" to create a boolean by asking the console if the value ("nice shoes") of the variable "shoes" includes the letters "l" and "n". The console returns a "false" for the "l" but a true for the "n"

// 8. Front & Back

// Create a new string from a given string with the first character of the given string added at the front and back. Expected output: JavaScript => JJavaScriptJ

const firstString = "JavaScript"; // I declare the variable
console.log(`${firstString[0]}${firstString}${firstString[0]}`); // ${firstString[0]} extracts the first character of the value from my varible firstString, which is "J" (from "Javascript"). ${firstString} prints the whole value: "Javascript". ${firstString[0]} prints again just the first character of the value: "J". Everything together return "JJavascriptJ"

// 9. Last Three Chars

// Create a new string from a given string taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more. Expected output: Javascript => iptJavaScriptipt

console.log(
  `${firstString.substring(7)}${firstString}${firstString.substring(7)}`
); // I use the variable of the previous exercise. Bit by bit: with ${firstString.substring(7)} we want to extract from the 8th character of the string until the end ("ipt"). How? By asking for the index 7 (don't forget we start counting from nill). ${firstString} returns the whole string: "Javascript". ${firstString.substring(7)} will return again "ipt"

// 10. Java

// Create a variable and assign a string value to it. Then, convert the value to upper case and print the value to the console. Check whether it includes Java.

const computer = "ThinkPad"; // I declare a variable
console.log(`${computer.toUpperCase()}`); // I transform the value of my variable into uppercase with the method ".toUpperCase()" and print it
console.log(
  `Does our string include the word Java? ${computer.includes("Java")}`
); // With ${computer.includes("Java")} I "ask" the console if the word "Java" is inside my string. It returns "false" because the word "Java" is not within "Thinkpad"

// 11. First and Last

// Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 2. Expected output: JavaScript => tavaScripJ

const myString = "JavaScript"; // I declare a variable and give it the value "JavaScript"
console.log(
  `${myString[myString.length - 1]}${myString.substring(
    1,
    myString.length - 1
  )}${myString[0]}`
); // Bit by bit. First of all we will explain ${myString[myString.length - 1]}. "myString.length" returns the total number of characters of the variable (which are 10). That means "[myString.length - 1]" is the same than "10 - 1" (which is "9"). Once we get that, we can continue: ${myString[myString.length - 1]} is the same as writing ${myString[9]} and this means just extracting the 8th character of the string: "t" (don't forget we start counting from nill). Same example here: ${myString.substring(1, myString.length - 1)}. "myString.length - 1" is equals to "10-1" (which is "9"). So it's the same as writing ${myString.substring(1, 9)} and this means we want to extract from the 2nd until the 8th character of the string because the 9th won't be included. This means it returns "avaScrip". ${myString[0]} just gets the very first character of the string, which is "J". So in the end, the console returns "tavaScripJ"

// 12. Concatenation

// Create 3 different variables about yourself using strings as values e.g.let firstName = "Maria".Print the sentence to the console using string interpolation. Example of output: `My name is Maria. I live in Berlin and I am a teacher`.

const myName = "Jaime"; // I declare the first variable
const myCity = "Berlin"; // I declare the second variable
const myJob = "web developer"; // I declare the third variable
console.log(`My name is ${myName}. I live in ${myCity} and I am a ${myJob}.`); // I print a string with the values of my variables in placeholders within a string literal

// 13. Capitalize

// Declare a variable and assign the value the quick brown fox (lower case). Capitalize the first letter of that string.

const pangram = "the quick brown fox"; // I declare a variable
console.log(`${pangram[0].toUpperCase()}${pangram.substr(1)}`); // Bit by bit. First of all we will analyze ${pangram[0].toUpperCase()}. "pangram[0]" extracts the index 0 of our string, which means the first character of it: "t" (since we start counting from nill). Then we add ".toUpperCase()" in order to convert the "t" into "T". After that we go for ${pangram.substr(1)} which will return all the characters between the 2nd character of the string and the end of it (since we didn't write a second number telling the console where to stop). This returns "he quick brown fox". And both values together will return "The quick brown fox"
