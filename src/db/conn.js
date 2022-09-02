const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://root:root@cluster0.yizcs.mongodb.net/registration", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Connection successfull`);
  })
  .catch((e) => {
    console.log(e.message);
  });
