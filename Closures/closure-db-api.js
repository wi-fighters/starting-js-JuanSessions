// Closure exercise

// This exercise is designed to demonstrate CRUD operations (create, read, update, delete) on an imaginary database (for this example we'll just use an array).

// To avoid our database getting hacked, we will encapsulate it in a closure.

// We still want the outside world to be able to interact with the database in a limited way, so we will expose some functions as an API (Application Programming Interface) that users must use instead of operating directly on the DB.

// Create all functions as arrow function expressions assigned to constant variables.

// Return a function reference
// 1. In your own repo, create a file called closure-db-api.js and make a commit as you complete each step:

// 2. Create a function called init, which accepts no parameters. Inside this func:

// Declare an array called db.
// Define a function called create (details in next step).
// Return a reference to the create function.

// 3. The create function should:
// Accept a new element as a parameter.
// Push this element onto the db array in its outer scope.
// Return the new length of this db array.
// 4. Test your function:
// assign the return value of init to a new constant named createInDb.
// Run createInDb a few times with different input, and log each result to the console.
// Expose more function references (provide an API)
// Part one: refactor init
// 1. Refactor your init function so it returns an array called api.

// 2. Before init returns, it should push your create function into the api array.

// 3. Modify your tests so your code works as before.

// Part two: add read
// 1. In the same lexical environment as your create function, create a new one called read. It should:
// -accept no arguments
// -return a copy of the array. Find out on MDN how to use the 'spread operator' to achieve this.
// -Test yourself: What would happen if we returned db without using the spread operator?
// 2. Refactor init so that the returned array contains both the create and read function references.

// 3. From outside the init function, log the contents of db by accessing the read function from the api.

// 4. From outside the init function, see if you can hack the db and insert new elements without using the create function. (E.g. try using the push method on the return value from read).

// -Call the read function again (from outside init), to check whether your hacking attempt was successful.
// -Can you alter the db from outside? Why / why not?
// -If you can, refactor your init function to prevent this.

// Part 3: Add update
// 1. Following the same pattern as above, add a new function to your API called update. This function should:
// -accept two parameters: an index and a new element.
// -replace the db element at the given index with the new element (if it already exists).
// -If there is no existing element at the given index, return an error message.
// 2. Refactor update to change its behavior when there's no db element at the given index.
// -This time, instead of returning an error message, it should call the create function and pass in the new element.
// 3. Refactor the create function so it returns a string like: 'New element added! The new length of the array is 7.'

// 4. Expose update so it can be accessed from outside the init function.

// Part 4: Add delete
// 1. Following the same pattern as above, add a new function to your API called delete. This function should:
// -accept one parameter: the index of the element to delete.
// -delete the db element at the given index if it exists.
// -If there is no existing element at the given index, return an error message.
// 2. Expose delete so it can be accessed from outside the init function.
// Again, try to hack your db from outside. Can you perform CRUD operations on it without using your API?

// Your goal is to refactor init so that you can't ;)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const init = () => {
//   const db = [];
//   const create = dbToArray => {
//     db.push(dbToArray);
//     return db.length;
//   };
//   const read = () => {
//     const dbCopy = [...db];
//     return dbCopy;
//   };
//   const api = [create, read];
//   return api;
// };
// const createInDb = init();
// createInDb[0]("me");
// createInDb[0]("you");
// createInDb[0]("they");
// createInDb[0]("us");
// console.log(createInDb[0]("huhjuinj")); // [0]=create in const api. this adds to the list (5 at this point), tells how many objects u have, but keeps the elements private
// console.log(createInDb[1]()); // [1]=read in const api. this reads the content

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//last update
const init = () => {
  const db = [];
  const api = [];
  const create = element => {
    db.push(element);
    return db.length;
  };

  const read = () => {
    const dbCopy = [...db]; //the spread operator give you access to the Array, not copy.
    return dbCopy;
  };

  const update = (index, elem) => {
    // 1. Following the same pattern as above, add a new function to your API called update. This function should:
    // -accept two parameters: an index and a new element.
    if (db[index]) {
      //-replace the db element at the given index with the new element (if it already exists).
      return (db[index] = elem);
    } else {
      //   return "Error, there is no existing element at the given index!";
      //   return db.push(elem);
      return create(elem);
    }
  };
  const remove = index => {
    if (db[index]) {
      return db.splice(index, 1);
    } else {
      return "error message";
    }
  };
  api.push(create, read, update, remove);
  return api;
};

let createInDb = init();

console.log(createInDb[0]("first")); //create 1st element
console.log(createInDb[0](2)); //create 2nd element
console.log(createInDb[0]("sun")); //create 3rd element
console.log(createInDb[1]("new")); // tried to create in the read function and it's not possible. From the outside(api) you can not add new element
console.log(createInDb[1]()); // access to read
console.log(createInDb[2](0, "new elem")); // update element in the index zero of the Array
console.log(createInDb[2](10, 100)); // update element at index 10, which means create, cause there's no index 10
console.log(createInDb[2](6, "100")); // update element at index 100, which means create, cause there's no index 100
console.log(createInDb[1]()); // access to read
console.log(createInDb[3](3)); //delete the element at index 3
console.log(createInDb[1]()); //  access to read
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const init = () => {
//   // 2. Create a function called init, which accepts no parameters.

//   const db = []; // Declare an array called db.
//   const api = []; // Expose more function references (provide an API)
//   const create = dbToArray => {
//     // Define a function called create (details in next step).
//     db.push(dbToArray); // Push this element onto the db array in its outer scope.
//     return db.length; // Return the new length of this db array.
//   };
//   const read
//   //return create (deleted already); // Return a reference to the create function
//   api.push(create);
//   return api; // 1. Refactor your init function so it returns an array called api.
// };
// const createInDb = init(); // assign the return value of init to a new constant named createInDb.

// createInDb[0]("me"); // Run createInDb a few times with different input, and log each result to the console.
// createInDb[0]("you");
// console.log(createInDb[0]("they"));
