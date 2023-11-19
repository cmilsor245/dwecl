export function uploadTweet(tweet_input, tweets_array, trash_icon_svg, tweet_list_element) {
  const TWEET = tweet_input.value;

  clearInput(tweet_input);

  pushTweetToArray(TWEET, tweets_array);

  const NEW_TWEET = document.createElement("li");
  NEW_TWEET.innerHTML = `<span id = "tweet-li-text">${tweets_array[tweets_array.length - 1].text}</span><span id = "trash-icon">${trash_icon_svg}</span>`;
  tweet_list_element.appendChild(NEW_TWEET);
}

function clearInput(input) {
  input.value = "";
  input.focus();
}

function pushTweetToArray(tweet_text, tweets_array) {
  const UNIQUE_ID = Date.now(); // se genera un id único para cada tweet ya que no pueden generarse dos fechas iguales

  const TWEET_OBJECT = {
    id: UNIQUE_ID,
    text: tweet_text
  };
  tweets_array.push(TWEET_OBJECT);
}