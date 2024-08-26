console.log("Hi!");

setTimeout(function timeout() {
 
    console.log("Click the button!");
}, 1000);

console.log("Welcome to loupe.");

let c = 0;
for(let i = 0; i < 100000000; i++){
    c++;
}
console.log("Done with the loop!");