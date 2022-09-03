const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const exphbs = require("express-handlebars");
require("./db/conn");

const port = process.env.PORT || 3000;

//To render html files
// const static_path = path.join(__dirname, "../public");
// app.use(express.static(static_path));

const templates_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

// app.engine(
//   ".hbs",
//   exphbs.engine({
//     extname: ".hbs",
//     defaultLayout: false,
//     layoutsDir: "views/",
//   })
// );
// app.set("view engine", ".hbs");

app.set("view engine", "hbs");
app.set("views", templates_path);
hbs.registerPartials(partials_path);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.get("/", (req, res) => {
  //   res.send("Hello from the sourav");
  //We will use render for rendering the hbs
  res.render("index");
});

app.listen(port, () => {
  console.log(`Server is running at port no ${port}`);
});
