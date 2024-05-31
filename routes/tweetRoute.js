const express = require("express");
const router = express.Router();
const {
  getTweets,
  postTweet,
  deleteTweet,
  getSingleTweet,
} = require("../controller/tweetController");

router.post("/tweet", postTweet);
router.get("/tweets", getTweets);
router.get("/tweet/:id", getSingleTweet);
router.delete("/tweet/:id", deleteTweet);

module.exports = router;
