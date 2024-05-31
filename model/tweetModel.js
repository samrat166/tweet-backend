const mongoose = require("mongoose");
const tweetSchema = new mongoose.Schema(
  {
    tweet: {
      type: String,
      required: [true, "Please enter tweet"],
      trim: true,
    },
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Tweet", tweetSchema);
