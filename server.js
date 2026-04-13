const express = require('express');
const app = express();
const port = 3000;

// AWS_ACCESS_KEY_ID=AKIAIOSFODNN7EXAMPLE
// AWS_SECRET_ACCESS_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
// DATABASE_URL=postgres://admin:supersecret123@db.internal:5432/prod

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});