export function uploadTweet(tweet_input, tweets_array, trash_icon_svg, tweet_list_element) {
  const TWEET = tweet_input.value;

  if (!checkEmptyInput(tweet_input)) {
    clearInput(tweet_input);

    pushTweetToArray(TWEET, tweets_array);

    updateLocalStorage(tweets_array);

    appendTweetToList(tweets_array[tweets_array.length - 1], trash_icon_svg, tweet_list_element);
  }
}

function checkEmptyInput(tweet_input) {
  if (tweet_input.value === "") {
    alert("Por favor, introduce un tweet");
    tweet_input.focus();
    return true;
  }
  return false;
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

function updateLocalStorage(tweets_array) {
  localStorage.setItem('tweets', JSON.stringify(tweets_array));
}

export function appendTweetToList(tweet, trash_icon_svg, tweet_list_element) {
  const NEW_TWEET = document.createElement('li');
  NEW_TWEET.innerHTML = `<span id="tweet-li-text">${tweet.text}</span><span id="trash-icon">${trash_icon_svg}</span>`;
  tweet_list_element.appendChild(NEW_TWEET);
}

export function handleTweetListWrapperClick(event, tweet_input) {
  if (event.target.closest(".trash-icon-svg")) {
    const TWEET = event.target.closest("li");
    TWEET.remove();
    alert("Tweet eliminado");
    tweet_input.focus();
  }
}