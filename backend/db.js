const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://gofood:gofood@cluster0.yjrhbjx.mongodb.net/gofoodmern?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

const mongoDB = async () => {
  try {
    mongoose.connect(mongoURI, async () => {
      console.log("Connected to MongoDB");
      const fetch_data = mongoose.connection.db.collection("food_items");
      fetch_data.find({}).toArray(function (err, data) {
        if (err) console.log("Error fetching data : " + err);
        // else console.log(data);
      });
    });
  } catch (error) {
    console.log("Error connecting to MongoDB : " + error);
  }
};

module.exports = mongoDB;
