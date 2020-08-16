const path = require('path')
const express = require('express');
const queries = require('../queries.js')


const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/books', (req, res) => {
  queries.getBooks()
    .then(booksArray => {
      res.json(booksArray)
    })
})

const port = 3333
app.listen(port, () => {
  console.log(`Our app is running on http://localhost:${port}`);
});
