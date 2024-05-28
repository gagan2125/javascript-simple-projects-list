function convertToRoman() {
  const input = document.getElementById("integerInput").value;
  const resultElement = document.getElementById("result");

  if (input === "") {
    resultElement.innerHTML = "Please enter a number.";
    return;
  }
  const num = parseInt(input);
  if (num <= 0) {
    resultElement.innerHTML = "Please enter a positive integer.";
    return;
  }
  const romanNumeral = integerToRoman(num);
  resultElement.innerHTML = `Roman Numeral: ${romanNumeral}`;
}
function integerToRoman(num) {
  const romanNumerals = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];
  let roman = "";
  for (const { value, symbol } of romanNumerals) {
    while (num >= value) {
      roman += symbol;
      num -= value;
    }
  }
  return roman;
}
