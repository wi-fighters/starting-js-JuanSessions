//1. Declare a variable called name.Assign a string value.Print to screen.

//2. Print to screen that name with a "Schm" in front of it.

//3. What value does name have now ? Comment your answer and then print name to screen to test.

//4. Assign another string value to name.Print to screen.Comment why name has now had two different values.

//5. Declare a variable called coffee.Assign it a numeric value.

//6. Print to screen a string that tells us x regularly drinks y cups of coffee per day.

//7. Declare a variable called daysBeforeExam.Assign it a numeric value.

//8. Print to screen a string that tells us x drinks y cups of coffee with n days before exam.

//9. Making use of`+=` and`-=`, print to screen a string that has x drinking one more cup of coffee, with (n - 1) less days before exam.

//10. What value do coffee and daysBeforeExam currently have ? Comment your answer, then print to screen the variables to test.

//11. Review variable values throughout code.

//## concat()

//    ** Another way to accumulate or "concatenate" strings.**
//
//      12. Declare a variable called schmozzler.Assign it a string value of "Schm".

//13. Using the concat() function, print to screen the name variable linked to schmozzler.

//14. What value does name have now ? Comment your answer and then print name to screen to test.

let name = "variable";
name = "Juan";
console.log(`Schm${name}`);
//Name has the value "another", it has been changed or reassigned. =Schmanother

let coffee = 5;
console.log(`${name} regularly drinks ${coffee} cups of coffee per day`);

let daysBeforeExam = 30;
console.log(
  `${name} regularly drinks ${coffee} cups of coffee per day ${daysBeforeExam} before the exam`
);

//With each fewer day untill the exam, add one cup of coffee.

coffee += 1;
daysBeforeExam -= 1;
console.log(
  `${name} regularly drinks ${coffee} cups of coffee per day ${daysBeforeExam} before the exam`
);

let schmozzler = "Schm";
console.log(schmozzler.concat(name));

//or function schmozzler(name) {
//  return name.push("Schm");
// }
