const path = require('path')
const express = require('express');
const bodyParser = require('body-parser');
const queries = require('../queries.js')
const render = require('./render.js')


const app = express();

app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  queries.getBooks()
    .then(booksArray => {
      const booksHTML = render.makeBookList(booksArray)
      const htmlString = render.makeHTML(booksHTML)
      res.send(htmlString)
    })
});

const port = 3333
app.listen(port, () => {
  console.log(`Our app is running on http://localhost:${port}`);
});