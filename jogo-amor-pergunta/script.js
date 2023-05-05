const btn = document.querySelector(".perigo");

function taTonta(e) {
  e.preventDefault();

  e.target.style.top = Math.floor(Math.random() * 300) + "px";
  e.target.style.right = Math.floor(Math.random() * 200) + "px";
}

btn.addEventListener("click", taTonta);
