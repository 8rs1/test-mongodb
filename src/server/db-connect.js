const mongoose = require("mongoose");
const MONGO_URL = "mongodb://localhost:27017/test";
mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db = mongoose.connection;

db.on('error',console.log.bind(console,"Connection error:"))
db.once("open",()=> {
    console.log("Connected to database!");
})


module.exports = mongoose;

