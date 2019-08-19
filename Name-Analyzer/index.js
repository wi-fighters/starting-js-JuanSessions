const name = "Winston Churchill" 
const totalLetters = name.length
const spaceCount = (name.split(" ").length - 1);
const firstLetter = name[0]
const lastLetter = name[name.length -1]
console.log(`Hello ${name}.
Your name is ${(totalLetters - spaceCount)} letters long
The first letter of your name is ${firstLetter}, the last is ${lastLetter}.
If I wanted to be funny, I would call you Winschmoo`)