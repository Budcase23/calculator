const display = document.getElementById("display");

function showDisplay(input) {
  display.value += input;
}

function displayClear() {
  display.value = " ";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}
