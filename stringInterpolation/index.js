                          // This exercise is made by Juan and Hatem //

 // 1.Characters & Properties                         
    const firstString = "juan40";
    console.log(`${firstString} length: ${firstString.length}`);
    console.log(`${firstString} ==> ${firstString[1]} , ${firstString[5]}`);

//  2. JS
    const JS = "JavaScript";
    console.log(`${JS} length: ${JS.length}`);
    console.log(`${JS} ==> ${JS[0]} , ${JS[4]}`);

//  3. I can...
    const walking = "I can walk in the park all day!";
    const substring = walking.substring(18, 22);
    console.log(`${walking} ==> ${substring}`);

//  4. aSc
    const JS1 = "JavaScript";
    const substring1 = JS1.substring(3, 6);
    console.log(`${JS1} ==> ${substring1}`);

//  5. Upper Case
    const helloWorld = "Hello World";
    const convertedString = helloWorld.toUpperCase();
    console.log(`${helloWorld} ==> ${convertedString}`);


// 6. Lower Case
    const helloEarthling = "Hello Earthling";
    const convertedString2 = helloEarthling.toLowerCase();
    console.log(`${helloEarthling} ==> ${convertedString2}`);


// 7. Does it contain...?
    const niceShoes = "nice shoes";
    const itContain = niceShoes.includes("l");
    const itContain1 = niceShoes.includes("n");
    console.log(niceShoes);
    console.log(` Is the string contains the letter "l": ${itContain}
    Is the string contains the letter "n": ${itContain1}`);





// 8. Front & Back
    const JS2 = "JavaScript";
    const firstCharacter = JS2[0];
    console.log(`${JS2} => ${firstCharacter}${JS2}${firstCharacter}`);

// 9. Last Three Chars
    const JS3 = "JavaScript";
    const last3Characters = JS3.substring(7);
    console.log(`${JS3} => ${last3Characters}${JS3}${last3Characters}`);

// 10. Java
    const Musiker = "veryCool";
    const convertedMusiker = Musiker.toUpperCase();
    const itContain2 = Musiker.includes("Java");
    console.log(` The string with upper case : ${convertedMusiker}`);
    console.log(`Is the string contains the word "Java": ${itContain2}`);





// 11. First and Last
    const JS4 = "JavaScript";
    const firstJS4 = JS4[0];
    const middleJS = JS4.substring(1,9);
    const lastJS4 = JS4[JS4.length - 1];
    console.log(`${JS4} => ${lastJS4}${middleJS}${firstJS4}`);

// 12. Concatenation
    const name = "Adam Zreek";
    const country = "Syria";
    const age = 2 ;
    console.log(`My name is ${name}. I am from ${country} and I am ${age} months old.`);

// 13. Capitalize
    const stringtobeCapitalized = "the quick brown fox";
    const firstLetter = stringtobeCapitalized.substring(0 , 1);
    const capitalizedLetter = firstLetter.toUpperCase();
    const modifiedString = stringtobeCapitalized.substring(1);
    console.log(`${stringtobeCapitalized} ==> ${capitalizedLetter}${modifiedString}`);

