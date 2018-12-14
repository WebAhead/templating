const path = require('path')
const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const queries = require('../queries.js')

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  queries.getBooks()
    .then(booksArray => {
      const data = {
        title: "My Books",
        header: "Here is a list of books",
        books: booksArray
      }
      res.render("home", data)
    });
})

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.engine(
  "hbs",
  exphbs({
    extname: "hbs",
    layoutsDir: path.join(__dirname, "views", "layouts"),
    defaultLayout: "main"
  })
)

const port = 5555
app.listen(port, () => {
  console.log(`Our app is running on http://localhost:${port}`);
});