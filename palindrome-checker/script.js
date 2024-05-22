function checkPalindrome() {
  let inputString = document.getElementById("inputString").value;
  let result = document.getElementById("result");

  let sanitizedString = inputString.toLowerCase().replace(/[^a-z0-9]/g, "");
  const length = sanitizedString.length;
  let isPalindrome = true;

  for (let i = 0; i < length / 2; i++) {
    if (sanitizedString[i] !== sanitizedString[length - 1 - i]) {
      isPalindrome = false;
      break;
    }
  }
  if (isPalindrome) {
    result.textContent = `"${inputString} is a Palindrome"`;
    result.style.color = "green";
  } else {
    result.textContent = `"${inputString} is not a Palindrome"`;
    result.style.color = "red";
  }
}
