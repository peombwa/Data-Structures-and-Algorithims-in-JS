var Stack = require('./stackClass.js');

var s = new Stack();
s.push("David");
s.push("Raymond");
s.push("Bryan");
console.log("Length: ", s.length());
console.log(s.peek());

var popped = s.pop();
console.log("Thie popped element is : ", popped);
console.log(s.peek());
s.push("Cynthia");
console.log(s.peek());
s.clear();
console.log("Length : ", s.length());
console.log(s.peek());
s.push("Clayton");
console.log(s.peek());