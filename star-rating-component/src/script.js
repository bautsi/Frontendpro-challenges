// write your JavaScript here

const texts = [
  "We're sorry to hear that you had a bad experience. We would like to learn more about what happened and how we can make things right.",
  "We apologize for the inconvenience you experienced. We appreciate your feedback and would like to work with you to address any issues.",
  "Thank you for your feedback. We're sorry to hear that your experience wasn't perfect. We would love to hear more about your concerns to see how we can improve.",
  "Thank you for your positive feedback! We're glad to know that you had a great experience and we appreciate your support.",
  "Excellent! We're thrilled to hear you had such a positive experience. Thank you for choosing our product/service.",
];

const star1 = document.getElementById("star1");
const star2 = document.getElementById("star2");
const star3 = document.getElementById("star3");
const star4 = document.getElementById("star4");
const star5 = document.getElementById("star5");
const text = document.getElementById("text");

star1.addEventListener("click", () => {
  star1.src = "./src/images/star.png";
  star2.src = "./src/images/nostar.png";
  star3.src = "./src/images/nostar.png";
  star4.src = "./src/images/nostar.png";
  star5.src = "./src/images/nostar.png";
  text.textContent = texts[0];
});
star2.addEventListener("click", () => {
  star1.src = "./src/images/star.png";
  star2.src = "./src/images/star.png";
  star3.src = "./src/images/nostar.png";
  star4.src = "./src/images/nostar.png";
  star5.src = "./src/images/nostar.png";
  text.textContent = texts[1];
});
star3.addEventListener("click", () => {
  star1.src = "./src/images/star.png";
  star2.src = "./src/images/star.png";
  star3.src = "./src/images/star.png";
  star4.src = "./src/images/nostar.png";
  star5.src = "./src/images/nostar.png";
  text.textContent = texts[2];
});
star4.addEventListener("click", () => {
  star1.src = "./src/images/star.png";
  star2.src = "./src/images/star.png";
  star3.src = "./src/images/star.png";
  star4.src = "./src/images/star.png";
  star5.src = "./src/images/nostar.png";
  text.textContent = texts[3];
});
star5.addEventListener("click", () => {
  star1.src = "./src/images/star.png";
  star2.src = "./src/images/star.png";
  star3.src = "./src/images/star.png";
  star4.src = "./src/images/star.png";
  star5.src = "./src/images/star.png";
  text.textContent = texts[4];
});
