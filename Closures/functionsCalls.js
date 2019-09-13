function b() {
  var myVar;
  console.log(myVar); // undefined, 3rd called in the result and undefined cause b has no value
}

function a() {
  var myVar = 2;
  console.log(myVar); //2
  b();
}
var myVar = 1;
console.log(myVar); //first in the result cause is the global execution context
a(); // function a called here, so its gonna appear second in the result
