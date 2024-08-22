// ------------------------------------------------------------------------------------
// Scope Chain, Lexical Scoping

// Focus on where the functions are defined, not when they're executed.

const a = 'Jonas';
first();

function first() {
  const b = 'Hello!';
  second();

  function second() {
    const c = 'Hi!';
    third();
  }
}

function third() {
  const d = 'Hey!';
  console.log(d + c + b + a);
}

// -----------------------------------------
// const a = 'Jonas';
// first();
// function first() {
//   const b = 'Hello!';
//   second();

//   function second() {
//     const c = 'Hi!';
//     third();
//     function third() {
//       const d = 'Hey!';
//       console.log(d + c + b + a);
//     }
//   }
// }