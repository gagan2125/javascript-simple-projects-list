function convertTemperature() {
  const temperatureInput = parseFloat(
    document.getElementById("temperatureInput").value
  );
  const unitSelect = document.getElementById("unitSelect");
  const selectedUnit = unitSelect.options[unitSelect.selectedIndex].value;
  let result;

  if (selectedUnit === "celsius") {
    result = (temperatureInput * 9) / 5 + 32;
    document.getElementById(
      "result"
    ).textContent = `${temperatureInput} Celsius is ${result.toFixed(
      2
    )} Fahrenheit.`;
  } else if (selectedUnit === "fahrenheit") {
    result = ((temperatureInput - 32) * 5) / 9;
    document.getElementById(
      "result"
    ).textContent = `${temperatureInput} Fahrenheit is ${result.toFixed(
      2
    )} Celsius.`;
  } else {
    document.getElementById("result").textContent =
      "Please select a valid unit.";
  }
}
