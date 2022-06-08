let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

const myElement = document.getElementById("doc");
myElement.onclick = () => {
  if (!myElement.style.color) {
    myElement.style.color = "pink";
  }
  checkWin();
};

function checkWin() {
  const cells = document.getElementsByClassName("cell");
  console.log(cells.length);
  for (let index = 0; index < cells.length; index++) {
    const element = cells[index];
    console.log(element.style);
  }
}
