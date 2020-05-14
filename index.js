let emojiData;
let timeoutId;
let request = new XMLHttpRequest();
let button = document.querySelector(".js-button");
let clipboardButton = document.querySelector(".js-copy");
let image = document.querySelector(".js-emoji-image");
let shortCode = document.querySelector(".js-shortcode");

let getRandomProperty = (obj = {}) => {
  let keys = Object.keys(obj);
  let randomKey = keys[(keys.length * Math.random()) << 0];
  return { code: randomKey, imageSrc: obj[randomKey] };
};

let updateEmojiOnScreen = (emojiData = { imageSrc: "", code: "" }) => {
  image.src = emojiData["imageSrc"];
  image.onload = () => {
    shortCode.innerHTML = emojiData["code"];
  };
};

request.open("GET", "github-emoji.json");
request.onload = function () {
  emojiData = JSON.parse(this.response);
  updateEmojiOnScreen(getRandomProperty(emojiData));
};
request.send();

button.addEventListener("click", () => {
  let result = getRandomProperty(emojiData);
  updateEmojiOnScreen(result);
});

// Clipboard.js stuff

var clipboard = new ClipboardJS(".js-copy");

clipboard.on("success", function (e) {
  window.clearTimeout(timeoutId);
  clipboardButton.classList.add("show-tooltip", "success");
  timeoutId = setTimeout(
    () => clipboardButton.classList.remove("show-tooltip", "success"),
    4000
  );

  e.clearSelection();
});

clipboard.on("error", function (e) {
  window.clearTimeout(timeoutId);
  clipboardButton.classList.add("show-tooltip", "failure");
  timeoutId = setTimeout(
    () => clipboardButton.classList.remove("show-tooltip", "failure"),
    4000
  );

  e.clearSelection();
});
