let request = new XMLHttpRequest();
let emojiData;
let getRandomProperty = (obj = {}) => {
  let keys = Object.keys(obj);
  let randomKey = keys[(keys.length * Math.random()) << 0];
  return { code: randomKey, imageSrc: obj[randomKey] };
};

request.open("GET", "github-emoji.json");
request.onload = function() {
  emojiData = JSON.parse(this.response);
};
request.send();

let button = document.querySelector(".js-button");
let image = document.querySelector(".js-image");
let shortCode = document.querySelector(".js-shortcode");
button.addEventListener("click", () => {
  let result = getRandomProperty(emojiData);
  console.log(result);
  image.src = result["imageSrc"];
  shortCode.innerHTML = result["code"];
});
