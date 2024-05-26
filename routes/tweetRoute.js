const express = require("express");
const router = express.Router();
const {
  getTweets,
  postTweet,
  deleteTweet,
  getSingleTweet,
} = require("../controller/tweetController");

router.post("/contact", postTweet);
router.get("/contact", getTweets);
router.get("/contact/:id", getSingleTweet);
router.delete("/contact/:id", deleteTweet);

module.exports = router;
