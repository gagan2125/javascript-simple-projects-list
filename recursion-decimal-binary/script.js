function decimalToBinary(n, logElement) {
  if (n === 0) {
    logElement.innerHTML += `decimalToBinary(${n}) = 0\n`;
    return "0";
  }
  if (n === 1) {
    logElement.innerHTML += `decimalToBinary(${n}) = 1\n`;
    return "1";
  }
  const quotient = Math.floor(n / 2);
  const remainder = n % 2;
  logElement.innerHTML += `decimalToBinary(${n}) = decimalToBinary(${quotient}) + ${remainder}\n`;
  return decimalToBinary(quotient, logElement) + remainder.toString();
}

function convertToBinary() {
  const input = document.getElementById("decimalInput").value;
  const resultElement = document.getElementById("result");
  const logElement = document.getElementById("log");

  logElement.innerHTML = "";
  const result = decimalToBinary(parseInt(input), logElement);

  resultElement.innerHTML = `Binary: ${result}`;
}
