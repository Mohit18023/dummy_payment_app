const mongoose = require("mongoose");

const ConnectionString =
  "mongodb+srv://mohitchoudhary1054:Y9gBmAVPuQO1SQF6@paytm.poms6ao.mongodb.net/paytm";
mongoose.connect(ConnectionString);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Database Connected");
});

// creating a schema for the user
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
    minLength: 3,
    maxLength: 30
  },
  password: {
    type: String,
    required: true,
    minLengh: 8,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 30
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 30
  },
});

// Accounts Schema
const accountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, // Refernce to User Model
    ref: 'User',
    required: true
  },
  balance: {
    type:Number,
    required: true,
  }
})

// Create a model from the Schema
const User = mongoose.model("User", userSchema);
const Account = mongoose.model('Account',accountSchema);

module.exports ={ User, Account};