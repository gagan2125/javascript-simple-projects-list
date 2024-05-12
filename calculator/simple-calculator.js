function appendToDisplay(value) {
  document.getElementById("display").value += value;
}
function calculate() {
  let input = document.getElementById("display").value;
  let result;

  try {
    result = eval(input);
  } catch (error) {
    result = "Error";
  }
  document.getElementById("display").value = result;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}
