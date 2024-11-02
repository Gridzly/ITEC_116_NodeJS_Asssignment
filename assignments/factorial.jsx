const express = require('express');
const app = express();
const port = 9090;

// Function to check if a number is prime
const isPrime = (num) => {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
};

// Function to calculate factorial
const factorial = (num) => {
    if (num < 0) return null; // Factorial is not defined for negative numbers
    if (num === 0 || num === 1) return 1; // Base case
    return num * factorial(num - 1); // Recursive case
};

// AssignmentController for prime checking
app.get('/assignments/prime/:number', (req, res) => {
    const number = parseInt(req.params.number, 10);
    if (isNaN(number)) {
        return res.status(400).json({ error: 'Invalid number' });
    }

    const result = isPrime(number);
    return res.json({ isPrime: result });
});

// AssignmentController for factorial calculation
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
