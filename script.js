const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const imgContainer = document.querySelector(".imgContainer");
const imgs = document.querySelectorAll("img");
let currentImg = 1;
let timeout;
prev.addEventListener("click", () => {
  currentImg--;
  clearTimeout(timeout);
  updateImg();
});

next.addEventListener("click", () => {
  currentImg++;
  clearTimeout(timeout);
  updateImg();
});

const updateImg=()=> {
  if (currentImg > imgs.length) {
    currentImg = 1;
  } else if (currentImg < 1) {
    currentImg = imgs.length;
  }
  imgContainer.style.transform = `translateX(-${(currentImg - 1) * 700}px)`;
  timeout = setTimeout(() => {
    currentImg++;
    updateImg();
  }, 4000);
}
updateImg();

