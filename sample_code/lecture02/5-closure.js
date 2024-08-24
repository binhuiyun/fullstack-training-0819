// EX: Implement a function that can be called multiple times to increment a variable, log the output.

let counter = 0;
function add() {
  counter++;
  return counter;
}
console.log(add());
console.log(add());
console.log(add());


// // // ISSUE! Counter is accessible anywhere.
// counter = 10;
// console.log(counter);

// ---------------------------------------------
function counter() {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  };
}

// const add = counter();
// console.log(add());
// console.log(add());
// console.log(add());

// Cannot access that counter variable.

// const add1 = counter();
// console.log(add1()); // 1 or 4?

// console.log(add(), add1());

// ---------------------------------------------
// Very similar to classes and private variables.

// function ClassName() {
//   let privateVar = "privateValue";
//   let publicVar = "";
//   function privateFn() { }
//   function publicFn() {
//     console.log(privateVar);
//   }
//   return {
//     publicVar: publicVar,
//     publicFn: publicFn
//   };
// }

// const obj = ClassName();
// console.log("ClassName() =", obj);
// obj.publicFn();
// console.log(obj.privateVar);


