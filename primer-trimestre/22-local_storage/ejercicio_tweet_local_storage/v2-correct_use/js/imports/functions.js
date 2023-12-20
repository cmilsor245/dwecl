export function loadFromLocalStorage(button) {
  const TWEETS_LOCAL_STORAGE_ARRAY = JSON.parse(localStorage.getItem("tweets"));

  if (TWEETS_LOCAL_STORAGE_ARRAY) {
    enableButton(button);
    return TWEETS_LOCAL_STORAGE_ARRAY;
  } else {
    return [];
  }
}

export function displayTweets(tweets_array, trash_icon, tweet_list_element, buttonToEnable) {
  if (tweets_array.length > 0) {
    clearTweetList(tweet_list_element);

    tweets_array.forEach(tweet => {
      const li = document.createElement("li");
      li.innerHTML = `<span id = "tweet-li-text">${tweet.text}</span><span id = "trash-icon-span" data-id = "${tweet.id}">${trash_icon}</span>`;
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

export function uploadTweet(tweet_input, tweets_array, trash_icon, tweet_list_element, buttonToEnable, error_display_element) {
  if (!emptyInput(tweet_input)) {
    if (correctInputLength(tweet_input)) {
      const UNIQUE_ID = Date.now();
      const TWEET_ELEMENT = {
        id: UNIQUE_ID,
        text: tweet_input.value
      }
      tweets_array.push(TWEET_ELEMENT);

      displayTweets(tweets_array, trash_icon, tweet_list_element, buttonToEnable);

      saveToLocalStorage(tweets_array);

      resetInput(tweet_input);
    } else {
      displayError("la longitud del tweet no puede superar los 35 caracteres", error_display_element);
    }
  } else {
    displayError("el tweet no puede estar vacío", error_display_element);
  }
}

function emptyInput(tweet_input) {
  if (tweet_input.value === "") {
    return true;
  } else {
    return false;
  }
}

function correctInputLength(tweet_input) {
  if (tweet_input.value.length <= 35) {
    return true;
  } else {
    return false;
  }
}

function resetInput(tweet_input) {
  tweet_input.value = "";
  tweet_input.focus();
}

export function clearTweets(tweet_list_element, buttonToEnable, tweets_array, trash_icon, tweet_input) {
  clearTweetList(tweet_list_element);

  tweets_array = [];

  displayTweets(tweets_array, trash_icon, tweet_list_element, buttonToEnable);

  localStorage.clear();

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

export function handleTweetListWrapperClick(event, tweets_array, trash_icon, tweet_list_element, buttonToEnable, buttonToDisable) {
  const CLICKED_TRASH_ICON = event.target.closest("#trash-icon-span");

  if (CLICKED_TRASH_ICON) {
    const TWEET_TO_REMOVE_ID = parseInt(CLICKED_TRASH_ICON.getAttribute("data-id"), 10);

    const TWEET_INDEX_TO_REMOVE = tweets_array.findIndex(tweet => tweet.id === TWEET_TO_REMOVE_ID);

    if (TWEET_INDEX_TO_REMOVE !== -1) {
      tweets_array.splice(TWEET_INDEX_TO_REMOVE, 1);

      displayTweets(tweets_array, trash_icon, tweet_list_element, buttonToEnable);

      saveToLocalStorage(tweets_array);
    }

    if (tweets_array.length === 0) {
      disableButton(buttonToDisable);
    }
  }
}

function saveToLocalStorage(tweets_array) {
  localStorage.setItem("tweets", JSON.stringify(tweets_array));
}

function displayError(message, error_display_element) {
  error_display_element.textContent = message;
  error_display_element.classList.remove("hidden-footer");

  setTimeout(function() {
    error_display_element.textContent = "";
    error_display_element.classList.add("hidden-footer");
  }, 2870);
}