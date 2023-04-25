const mongoose = require("mongoose");

const connect = () => {
  mongoose
    .connect("mongodb+srv://shwetashinde2:Smart5961@cluster0.konjvak.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
      console.log("database is connected");
    })
    .catch((e) => {
      console.log(e);
    });
};

connect();

module.exports = connect;
