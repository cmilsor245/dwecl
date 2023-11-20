export function displayTweets(tweets_array, trash_icon, tweet_list_element, buttonToEnable) {
  if (tweets_array.length > 0) {
    clearTweetList(tweet_list_element);

    tweets_array.forEach(tweet => {
      const li = document.createElement('li');
      li.innerHTML = `<span id = "tweet-li-text">${tweet.text}</span>${trash_icon}`;
      tweet_list_element.appendChild(li);
    });

    enableButton(buttonToEnable);
  } else {
    tweet_list_element.innerHTML = "<h3 id = \"no-tweets-h3\">no hay tweets</h3>";
  }
}

function clearTweetList(tweet_list_element) {
  while (tweet_list_element.firstChild) {
    tweet_list_element.removeChild(tweet_list_element.firstChild);
  }
}

export function uploadTweet(tweet_input, tweets_array, trash_icon, tweet_list_element, buttonToEnable) {
  const UNIQUE_ID = Date.now(); // id único
  const TWEET_ELEMENT = {
    id: UNIQUE_ID,
    text: tweet_input.value
  }
  tweets_array.push(TWEET_ELEMENT);

  displayTweets(tweets_array, trash_icon, tweet_list_element, buttonToEnable);

  resetInput(tweet_input);
}

function resetInput(tweet_input) {
  tweet_input.value = "";
  tweet_input.focus();
}

export function clearTweets(tweet_list_element, buttonToEnable, tweets_array, trash_icon, tweet_input) {
  clearTweetList(tweet_list_element);

  tweets_array = [];

  displayTweets(tweets_array, trash_icon, tweet_list_element, buttonToEnable);

  resetInput(tweet_input);

  disableButton(buttonToEnable);

  return tweets_array;
}

function enableButton(button) {
  button.disabled = false;
  button.classList.remove("disabled-button");
}

function disableButton(button) {
  button.disabled = true;
  button.classList.add("disabled-button");
}