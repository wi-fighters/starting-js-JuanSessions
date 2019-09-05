
console.log(typeof "Juan"); // string
console.log(typeof 1234);  // number

Array.isArray([1, 2, 3]);  // true
Array.isArray({foo: 123}); // false
Array.isArray('foobar');   // false
Array.isArray(undefined);  // false
 
console.log(Array.isArray([1,2,3])); 
console.log(Array.isArray({foo: 123})); 
console.log(Array.isArray('foobar'));   
console.log(Array.isArray(undefined));  


Number.isNaN(true);
Number.isNaN(null);
Number.isNaN(0 / 0)

console.log(Number.isNaN(true)); //false
console.log(Number.isNaN(null));  //false 
console.log(Number.isNaN(0 / 0));  //true
