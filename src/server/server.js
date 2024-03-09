const express = require("express");
const cors = require("cors")
const mongoose = require("./db-connect");
// const db = mongoose.connection;
const schema = mongoose.Schema;
const itemSchema = new schema({
  firstname: { type: String },
  lastname: { type: String },
  age: { type: Number },
});
const myModel = mongoose.model("MyModel", itemSchema);
const app = express();
app.use(cors())
app.get("/api/", (req, res) => {
  myModel
    .find({})
    .then((data) => {
      res.json(data);
      res.status(200);
      console.log("ok"+data);
    })
    .catch((err) => {
      res.send("error" + err);
      res.status(401)
      console.log(err);
      throw err
    });
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
