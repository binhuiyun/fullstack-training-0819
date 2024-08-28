const express = require('express');
const app = express();

function sum(n){
    let sum = 0;
    for(let i = 1; i <= n; i++){
        sum += i;
    }
    return sum;
}

app.get('/', (req, res) => {
    const n = req.query.n;
    res.send(`Sum of numbers from 1 to ${n} is ${sum(n)}`);
    });

app.listen(3000); 