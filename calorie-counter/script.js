document
  .getElementById("calorie-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    const activity = document.getElementById("activity").value;

    if (
      !/^\d+$/.test(age) ||
      !/^\d+$/.test(weight) ||
      !/^\d+$/.test(height) ||
      !activity
    ) {
      alert("Please enter valid inputs");
      return;
    }
    const bmr = calculateBMR(age, gender, weight, height);
    const calories = bmr * activity;

    document.getElementById(
      "result"
    ).textContent = `Your daily calorie requirement is ${Math.round(
      calories
    )} calories.`;
  });

function calculateBMR(age, gender, weight, height) {
  let bmr;
  if (gender === "male") {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }
  return bmr;
}
