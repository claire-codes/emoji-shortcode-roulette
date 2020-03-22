let request = new XMLHttpRequest();
let emojiData;
let button = document.querySelector(".js-button");
let image = document.querySelector(".js-image");
let shortCode = document.querySelector(".js-shortcode");

let getRandomProperty = (obj = {}) => {
  let keys = Object.keys(obj);
  let randomKey = keys[(keys.length * Math.random()) << 0];
  return { code: randomKey, imageSrc: obj[randomKey] };
};

let updateEmojiOnScreen = (emojiData = {imageSrc: '', code: ''}) => {
    image.src = emojiData["imageSrc"];
    shortCode.innerHTML = emojiData["code"];
}

request.open("GET", "github-emoji.json");
request.onload = function() {
  emojiData = JSON.parse(this.response);
  updateEmojiOnScreen(getRandomProperty(emojiData));
};
request.send();

button.addEventListener("click", () => {
  let result = getRandomProperty(emojiData);
  console.log(result);
  updateEmojiOnScreen(result);
});

// Clipboard.js stuff

var clipboard = new ClipboardJS('.js-copy');

clipboard.on('success', function(e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);

    e.clearSelection();
});

clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});
