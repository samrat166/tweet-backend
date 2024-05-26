const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Tweet = require("../model/tweetModel");
const ErrorHandler = require("../utils/errorHandler");

const postTweet = catchAsyncErrors(async (req, res, next) => {
  const newTweet = await Tweet.create(req.body);
  res.status(201).json({
    success: true,
    result: newTweet,
  });
});

const getTweets = catchAsyncErrors(async (req, res, next) => {
  const tweets = await Tweet.find().sort({ createdAt: -1 });
  res.status(200).json({
    success: true,
    result: tweets,
  });
});

const getSingleTweet = catchAsyncErrors(async (req, res, next) => {
  const tweet = await Tweet.findById(req.params.id);
  if (!tweet) {
    return next(new ErrorHandler("Tweet not found", 404));
  }
  res.status(200).json({
    success: true,
    tweet,
  });
});

const deleteTweet = catchAsyncErrors(async (req, res, next) => {
  const tweet = await Tweet.findById(req.params.id);
  if (!tweet) {
    return next(new ErrorHandler("Tweet not found", 404));
  }
  await tweet.remove();
  res.status(200).json({
    success: true,
    message: "tweet is deleted",
  });
});

module.exports = {
  postTweet,
  getTweets,
  getSingleTweet,
  deleteTweet,
};
