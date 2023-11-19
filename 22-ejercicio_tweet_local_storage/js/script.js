let tweets_array = [];

const TWEET_INPUT = document.querySelector("#tweet-input");
const UPLOAD_TWEET_BUTTON = document.querySelector("#upload-tweet-button");

const TWEET_LIST_WRAPPER = document.querySelector("#tweet-list-wrapper");
const TWEET_LIST_ELEMENT = document.querySelector("#tweet-list");

const TRASH_ICON = "<svg width = \"25px\" height = \"25px\" viewBox = \"0 0 24 24\" fill = \"none\" xmlns = \"http://www.w3.org/2000/svg\" color = \"#ff0000\" stroke-width = \"1.9\"><path d = \"M20 9L18.005 20.3463C17.8369 21.3026 17.0062 22 16.0353 22H7.96474C6.99379 22 6.1631 21.3026 5.99496 20.3463L4 9\" fill = \"#ff0000\"></path><path d = \"M20 9L18.005 20.3463C17.8369 21.3026 17.0062 22 16.0353 22H7.96474C6.99379 22 6.1631 21.3026 5.99496 20.3463L4 9H20Z\" stroke = \"#ff0000\" stroke-width = \"1.9\" stroke-linecap = \"round\" stroke-linejoin = \"round\"></path><path d = \"M21 6H15.375M3 6H8.625M8.625 6V4C8.625 2.89543 9.52043 2 10.625 2H13.375C14.4796 2 15.375 2.89543 15.375 4V6M8.625 6H15.375\" stroke = \"#ff0000\" stroke-width = \"1.9\" stroke-linecap = \"round\" stroke-linejoin = \"round\"></path></svg>";

UPLOAD_TWEET_BUTTON.addEventListener("click", uploadTweet);

function uploadTweet() {
  const TWEET = TWEET_INPUT.value;

  clearInput(TWEET_INPUT);

  pushTweetToArray(TWEET);

  const NEW_TWEET = document.createElement("li");
  NEW_TWEET.innerHTML = `<span id = "tweet-li-text">${TWEET}</span><span id = "trash-icon">${TRASH_ICON}</span>`;
  TWEET_LIST_ELEMENT.appendChild(NEW_TWEET);
}

function clearInput(input) {
  input.value = "";
  input.focus();
}

function pushTweetToArray(tweet) {
  const UNIQUE_ID = Date.now(); // se genera un id único para cada tweet ya que no pueden generarse dos fechas iguales

  const TWEET_OBJECT = {
    id: UNIQUE_ID,
    text: tweet
  };
  tweets_array.push(TWEET_OBJECT);
}