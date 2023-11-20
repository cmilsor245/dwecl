export function displayTweets(tweets_array, tweet_list_element) {
  if (tweets_array.length > 0) {
    clearTweetList(tweet_list_element);

    tweets_array.forEach(tweet => {
      const li = document.createElement('li');
      li.textContent = tweet.text;
      tweet_list_element.appendChild(li);
    });
  } else {
    tweet_list_element.innerHTML = "<h3 id = \"no-tweets-h3\">no hay tweets</h3>";
  }
}

function clearTweetList(tweet_list_element) {
  while (tweet_list_element.firstChild) {
    tweet_list_element.removeChild(tweet_list_element.firstChild);
  }
}

export function uploadTweet(tweet_input, tweets_array, tweet_list_element) {
  const UNIQUE_ID = Date.now();
  const TWEET_ELEMENT = {
    id: UNIQUE_ID,
    text: tweet_input.value
  }
  tweets_array.push(TWEET_ELEMENT);

  displayTweets(tweets_array, tweet_list_element);

  resetInput(tweet_input);
}

function resetInput(tweet_input) {
  tweet_input.value = "";
  tweet_input.focus();
}