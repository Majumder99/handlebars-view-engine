const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const exphbs = require("express-handlebars");
const { json } = require("express");
require("./db/conn");
const Register = require("./models/registers");

const port = process.env.PORT || 3000;

//To render html files
// const static_path = path.join(__dirname, "../public");
// app.use(express.static(static_path));

const templates_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

//Thse two needed for live website
app.use(express.json()); // just for postman
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "hbs");
app.set("views", templates_path);
hbs.registerPartials(partials_path);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", async (req, res) => {
  try {
    // console.log(req.body.fname);
    // res.status(200).send(req.body.fname);

    const registerInfo = new Register({
      firstName: req.body.fname,
      lastName: req.body.lname,
      age: req.body.age,
      gender: req.body.gender,
      email: req.body.email,
    });
    const result = await registerInfo.save();
    console.log(result);
    res.status(201).render("index");
  } catch (e) {
    res.status(400).send(e);
  }
});

app.get("/", (req, res) => {
  //   res.send("Hello from the sourav");
  //We will use render for rendering the hbs
  res.render("index");
});

app.listen(port, () => {
  console.log(`Server is running at port no ${port}`);
});
