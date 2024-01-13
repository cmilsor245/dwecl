
import * as functions from "./imports/functions.js";

let tweets_array = [];

const TWEET_INPUT = document.querySelector("#tweet-input");
const UPLOAD_TWEET_BUTTON = document.querySelector("#upload-tweet-button");

const TWEET_LIST_WRAPPER = document.querySelector("#tweet-list-wrapper");
const TWEET_LIST_ELEMENT = document.querySelector("#tweet-list");

const TRASH_ICON_SVG = "<svg class = \"trash-icon-svg\" width = \"25px\" height = \"25px\" viewBox = \"0 0 24 24\" fill = \"none\" xmlns = \"http://www.w3.org/2000/svg\" color = \"#ff0000\" stroke-width = \"1.9\"><path d = \"M20 9L18.005 20.3463C17.8369 21.3026 17.0062 22 16.0353 22H7.96474C6.99379 22 6.1631 21.3026 5.99496 20.3463L4 9\" fill = \"#ff0000\"></path><path d = \"M20 9L18.005 20.3463C17.8369 21.3026 17.0062 22 16.0353 22H7.96474C6.99379 22 6.1631 21.3026 5.99496 20.3463L4 9H20Z\" stroke = \"#ff0000\" stroke-width = \"1.9\" stroke-linecap = \"round\" stroke-linejoin = \"round\"></path><path d = \"M21 6H15.375M3 6H8.625M8.625 6V4C8.625 2.89543 9.52043 2 10.625 2H13.375C14.4796 2 15.375 2.89543 15.375 4V6M8.625 6H15.375\" stroke = \"#ff0000\" stroke-width = \"1.9\" stroke-linecap = \"round\" stroke-linejoin = \"round\"></path></svg>";

window.addEventListener('DOMContentLoaded', () => {
  tweets_array = JSON.parse(localStorage.getItem("tweets")) || [];
  if (tweets_array.length > 0) {
    tweets_array.forEach(tweet => {
      functions.appendTweetToList(tweet, TRASH_ICON_SVG, TWEET_LIST_ELEMENT);
    });
  } else {
    TWEET_LIST_ELEMENT.innerHTML = "<h3 id = \"no-tweets-h3\">no hay tweets</h3>";
  }
});

UPLOAD_TWEET_BUTTON.addEventListener("click", () => {
  functions.uploadTweet(TWEET_INPUT, tweets_array, TRASH_ICON_SVG, TWEET_LIST_ELEMENT);
});

// ! los elementos no se eliminan del local storage
TWEET_LIST_WRAPPER.addEventListener("click", (event) => {
  functions.handleTweetListWrapperClick(event, TWEET_INPUT);
});