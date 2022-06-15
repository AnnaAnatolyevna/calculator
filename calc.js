let a = ""; //first number
let b = ""; //second number
let sign = ""; //sign operation
let finish = false;

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const action = ["-", "+", "x", "/"];

//monitor
const out = document.querySelector(".calc-screen p");
function clearAll() {
  a = ""; //first number snd result
  b = ""; //second number
  sign = ""; //sign
  finish = false;
  out.textContent = 0;
}
document.querySelector(".ac").onclick = clearAll;
document.querySelector(".buttons").onclick = (event) => {
  //not button pressed
  if (!event.target.classList.contains("btn")) return;
  //button pressed clearAll ac
  if (event.target.classList.contains("ac")) return;

  out.textContent = "";
  //получаю нажатую кнопку
  const key = event.target.textContent;
  //если нажата 0-9 или .
  if (digit.includes(key)) {
    if (b === "" && sign === "") {
      a += key;

      out.textContent = a;
    } else if (a !== "" && b !== "" && finish) {
      b = key;
      finish = false;
      out.textContent = b;
    } else {
      b += key;
      out.textContent = b;
    }
    console.table(a, b, sign);
    return;
  }
  //если нажата клавиша + - / *
  if (action.includes(key)) {
    sign = key;
    out.textContent = sign;
    console.table(a, b, sign);
    return;
  }
  //нажата =
  if (key === "=") {
    if (b === "") b = a;
    switch (sign) {
      case "+":
        a = +a + +b;
        break;
      case "-":
        a = a - b;
        break;
      case "x":
        a = a * b;
        break;
      case "/":
        if (b === "0") {
          out.textContent = "Error";
          a = "";
          b = "";
          sign = "";
          return;
        }
        a = a / b;
        break;
    }
    finish = true;
    out.textContent = a;
    console.table(a, b, sign);
  }
};
