// ------------------------------------------------------------------------------------
// Execution Context, Call Stack

var myName = 'Fan';
function first() {
  console.log(`first: my name is ${myName}`);
  let hisName = 'Oliver';
  second(hisName);
  console.log(`first ends`);
}
function second(hisName) {
  console.log(`second: his name is ${hisName}`);
  let herName = 'Tracy';
  third(herName);
  console.log(`second ends`);
}
function third(herName) {
  console.log(`third: her name is ${herName}`);
  console.log(`third ends`);
}
first();


