// Eventos

let box = document.querySelector(".box");

function callback(event) {
  if (event.key == "r") {
    box.classList.toggle("red");
  } else if (event.key == "b") {
    box.classList.toggle("blue");
  } else {
    box.classList.toggle("green");
  }
}

window.addEventListener("keydown", callback);
