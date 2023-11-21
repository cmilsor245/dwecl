import * as functions from "./imports/functions.js";

const TWEET_INPUT = document.querySelector("#tweet-input");
const UPLOAD_TWEET_BUTTON = document.querySelector("#upload-tweet-button");
const CLEAR_TWEETS_BUTTON = document.querySelector("#clear-tweets-button");

const TWEET_LIST_WRAPPER = document.querySelector("#tweet-list-wrapper");
const TWEET_LIST_ELEMENT = document.querySelector("#tweet-list-element");

const TRASH_ICON = "<svg id = \"trash-icon-svg\" xmlns = \"http://www.w3.org/2000/svg\" width = \"24\" height = \"24\" viewBox = \"0 0 24 24\"><g fill = \"none\"><path fill = \"red\" d = \"M8 21h8a2 2 0 0 0 2-2V7H6v12a2 2 0 0 0 2 2Z\" opacity = \".16\"/><path stroke = \"red\" stroke-linecap = \"round\" stroke-linejoin = \"round\" stroke-width = \"2\" d = \"M14 11v6m-4-6v6M6 7v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7M4 7h16M7 7l2-4h6l2 4\"/></g></svg>";

const ERROR_DISPLAY_ELEMENT = document.querySelector("#incorrect-title");

let tweets_array = functions.loadFromLocalStorage(CLEAR_TWEETS_BUTTON);

window.addEventListener("DOMContentLoaded", () => {
  functions.displayTweets(tweets_array, TRASH_ICON, TWEET_LIST_ELEMENT, CLEAR_TWEETS_BUTTON);
  tweets_array = functions.loadFromLocalStorage(CLEAR_TWEETS_BUTTON);
})

UPLOAD_TWEET_BUTTON.addEventListener("click", () => {
  functions.uploadTweet(TWEET_INPUT, tweets_array, TRASH_ICON, TWEET_LIST_ELEMENT, CLEAR_TWEETS_BUTTON, ERROR_DISPLAY_ELEMENT);
})

CLEAR_TWEETS_BUTTON.addEventListener("click", () => {
  functions.clearTweets(TWEET_LIST_ELEMENT, CLEAR_TWEETS_BUTTON, tweets_array, TRASH_ICON, TWEET_INPUT);
  tweets_array = functions.clearTweets(TWEET_LIST_ELEMENT, CLEAR_TWEETS_BUTTON, tweets_array, TRASH_ICON, TWEET_INPUT);
})

TWEET_LIST_WRAPPER.addEventListener("click", (event) => {
  /* const CLICKED_TRASH_ICON = event.target.closest("#trash-icon-span"); // si se hace clic en cualquier elemento cuyo padre sea #trash-icon-span se completa el evento
  if (CLICKED_TRASH_ICON) {
    console.log(`test ${Date.now()}`);
  } */

  const CLICKED_TRASH_ICON = event.target.closest("#trash-icon-svg");
  if (CLICKED_TRASH_ICON) {
    functions.handleTweetListWrapperClick(event, tweets_array, TRASH_ICON, TWEET_LIST_ELEMENT, CLEAR_TWEETS_BUTTON, CLEAR_TWEETS_BUTTON);
  }
})