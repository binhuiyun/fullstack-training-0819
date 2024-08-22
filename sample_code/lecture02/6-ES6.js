// --------------------------------------------------------------------------------------
// Array Destructuring

// // ES6
// const [num1, num2, num3] = arr1;
// console.log(num1, num2, num3);
// // num1, num2, num3 are still consts
// // num1 = 2;

// -------------------------------------------
// Use destructuring to swap elements

// let first = 100;
// let second = 1;

// Only because first/second are declared with let
// [second, first] = [first, second];

// console.log(`first=${first}
// second=${second}`);

// --------------------------------------------------------------------------------------
// Object Destructuring

// const user = {
//   firstName: 'Name',
//   say: function () {
//     return `hi`;
//   },
//   devices: {
//     phone: 'iphone',
//     laptop: 'macbook pro'
//   }

// };

// const { firstName, say: greetings, devices, devices: { laptop } } = user;

// console.log("firstName =", firstName);
// console.log("greetings =", greetings);
// console.log("devices =", devices);
// console.log("laptop =", laptop);

// say is not being used
// console.log("say =", say);

// --------------------------------------------------------------------------------------
// Spread operator

// Add elements
// const arr3 = ['a', 'b', 'c'];
// const arr4 = [0, ...arr3, 10];
// console.log("arr4 =", arr4);

// Shallow copy
// const arr3Copy = [...arr3];
// console.log("arr3Copy =", arr3Copy);

// const nestedObj = [{ name: "Name1" }, { name: "Name2" }];
// const copyNested = [...nestedObj];
// copyNested[0].name = "Minwoo";
// console.log("nestedObj =", nestedObj);
// console.log("copyNested =", copyNested);

// Concatenate arrays
// const firstHalf = ['this', 'is'];
// const secondHalf = ['a', 'string'];
// const arr5 = [...firstHalf, ...secondHalf];
// console.log("arr5 =", arr5);

// Add entries
// const myObj = { a: 1, b: 3 };
// const newObj = { c: 5, ...myObj };
// console.log("newObj =", newObj);

// Copy and update an entry
// const updatedObj = { ...newObj, c: 10 };
// console.log("updatedObj =", updatedObj);


// --------------------------------------------------------------------------------------
// Rest operator

// const [first, second, ...rest] = [1, 2, 3, 4, 5, 6];
// console.log("rest =", rest);

// Must have matching property names
// const { first, ...restObj } = { first: 1, second: 2, third: 3, fourth: 4 };
// console.log("first =", first);
// console.log("restObj =", restObj);

// function printArray(...theArgs) {
//   console.log("theArgs =", theArgs);
// }

// printArray(1, 2, 3, 4, 5, 6, 7);


