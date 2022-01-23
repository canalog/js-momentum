const images = [];

for (let i = 0; i < 10; i++) {
  images.push(`${i}.jpg`);
}
console.log(images);
const chosenImage = images[Math.floor(Math.random() * images.length)];

// const bgImage = document.createElement("img");
// bgImage.src = `img/${chosenImage}`;

// document.body.appendChild(bgImage);

document.body.style.backgroundImage = `url(img/background/${chosenImage})`;
