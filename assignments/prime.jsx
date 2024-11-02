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

// AssignmentController
app.get('/assignments/prime/:number', (req, res) => {
    const number = parseInt(req.params.number, 10);
    if (isNaN(number)) {
        return res.status(400).json({ error: 'Invalid number' });
    }

    const result = isPrime(number);
    return res.json({ isPrime: result });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
