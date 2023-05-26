const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/loginsignup")
  .then(() => {
    console.log("Mongodb Started");
  })
  .catch(() => {
    console.log("Mongodb Failed to connect");
  });

const LogInSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const collection = new mongoose.model("Project", LogInSchema);

module.exports = collection;
  