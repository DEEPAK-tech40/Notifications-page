const readBtn = document.querySelector(`#read`);
const cntEl = document.querySelector(`#cnt`);
let cnt = 3;
let flag = [true, true, true];

function checkAndUpdate(el, i) {
  if (flag[i]) {
    cnt--;
    read(el, i);
    flag[i] = false;
  }
}

function read(btn, n) {
  const icon = document.querySelector(`.ur${n}>figcaption>.des>.uread`);
  console.log(icon);
  btn.style.background = `var(--White)`;
  icon.style.display = `none`;
  cntEl.textContent = cnt;
}

readBtn.addEventListener("click", () => {
  for (let i = 0; i < 3; i++) {
    const notifyEl = document.querySelector(`.ur${i}`);
    checkAndUpdate(notifyEl, i);
  }
});

for (let i = 0; i < 3; i++) {
  const notifyEl = document.querySelector(`.ur${i}`);
  notifyEl.addEventListener("click", () => {
    checkAndUpdate(notifyEl, i);
  });
}
