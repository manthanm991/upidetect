const mongoose = require("mongoose");

const mongoURI = "mongodb://mongo:27017/upidetect";

const connectToMongo = () => {
  mongoose
    .connect(mongoURI)
    .then(() => console.log("Connected to mongoose succesfully"))
    .catch((e) => console.log(e.message));
};
module.exports = connectToMongo;