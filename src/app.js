const express = require("express");
const path = require("path");
const app = express();
// const hbs = require("express-handlebars");
const exphbs = require("express-handlebars");
require("./db/conn");

const port = process.env.PORT || 3000;

//To render html files
// const static_path = path.join(__dirname, "../public");
// app.use(express.static(static_path));

app.engine(
  ".hbs",
  exphbs.engine({
    extname: ".hbs",
    defaultLayout: false,
    layoutsDir: "views/",
  })
);
app.set("view engine", ".hbs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/", (req, res) => {
  //   res.send("Hello from the sourav");
  //We will use render for rendering the hbs
  res.render("index");
});

app.listen(port, () => {
  console.log(`Server is running at port no ${port}`);
});
