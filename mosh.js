const myElement = document.getElementById("thinCircle");
myElement.onclick = () => {
  if (!myElement.style.color) {
    myElement.style.color = "pink";
  }
};
