const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

app.get('/', (req, res) => {
    res.send(`<h1>Server Is Live</h1>`)
  });

  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });