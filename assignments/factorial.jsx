const express = require('express');
const app = express();
const port = 9090;


const isPrime = (num) => {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
};

const factorial = (num) => {
    if (num < 0) return null;
    if (num === 0 || num === 1) return 1; 
    return num * factorial(num - 1); 
};


app.get('/assignments/prime/:number', (req, res) => {
    const number = parseInt(req.params.number, 10);
    if (isNaN(number)) {
        return res.status(400).json({ error: 'Invalid number' });
    }

    const result = isPrime(number);
    return res.json({ isPrime: result });
});


app.get('/assignments/factorial/:number', (req, res) => {
    const number = parseInt(req.params.number, 10);
    if (isNaN(number) || number < 0) {
        return res.status(400).json({ error: 'Invalid number. Please provide a non-negative integer.' });
    }

    const result = factorial(number);
    return res.json({ factorial: result });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
