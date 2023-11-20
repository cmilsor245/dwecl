import * as functions from "./imports/functions.js";

const TWEET_INPUT = document.querySelector("#tweet-input");
const UPLOAD_TWEET_BUTTON = document.querySelector("#upload-tweet-button");

const TWEET_LIST_ELEMENT = document.querySelector("#tweet-list-element");

let tweets_array = [];

window.addEventListener('DOMContentLoaded', () => {
  functions.displayTweets(tweets_array, TWEET_LIST_ELEMENT);
})

UPLOAD_TWEET_BUTTON.addEventListener("click", () => {
  functions.uploadTweet(TWEET_INPUT, tweets_array, TWEET_LIST_ELEMENT);
})