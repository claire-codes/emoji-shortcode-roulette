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
