let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})
prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1])
})
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const proposal = document.getElementById("proposal");
const flowers = document.getElementById("flowers");
const nextSection = document.getElementById("nextSection");
const flowerField = document.querySelector(".flower-field");

/* NO button runs away */
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);
  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

/* YES button logic */
yesBtn.addEventListener("click", () => {

  switchScreen(proposal, flowers);
  generateFlowers();

  setTimeout(() => {
    switchScreen(flowers, nextSection);
  }, 10000);
});

/* Screen switch helper */
function switchScreen(hide, show) {
  hide.classList.remove("active");
  show.classList.add("active");
}

/* SVG Flower Generator */
function generateFlowers() {
  for (let i = 0; i < 40; i++) {

    const flower = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    flower.setAttribute("viewBox", "0 0 100 100");
    flower.style.position = "absolute";
    flower.style.left = Math.random() * 100 + "vw";
    flower.style.top = "-100px";
    flower.style.width = "40px";
    flower.style.animation = `fall ${5 + Math.random() * 5}s linear infinite`;

    flower.innerHTML = `
      <circle cx="50" cy="50" r="20" fill="#ff4d6d"/>
      <circle cx="30" cy="40" r="15" fill="#ff85a2"/>
      <circle cx="70" cy="40" r="15" fill="#ff85a2"/>
      <circle cx="50" cy="20" r="15" fill="#ff85a2"/>
      <circle cx="50" cy="80" r="15" fill="#ff85a2"/>
    `;

    flowerField.appendChild(flower);
  }
}
const bgMusic = document.getElementById("bgMusic");
yesBtn.addEventListener("click", () => {

  // Start music
  bgMusic.volume = 0.7; // 50% volume
  bgMusic.play();

  switchScreen(proposal, flowers);
  generateFlowers();

  setTimeout(() => {
    switchScreen(flowers, nextSection);
  }, 10000);
});
bgMusic.volume = 0;
bgMusic.play();
bgMusic.loop = true;
bgMusic.volume = 0;
bgMusic.play();


