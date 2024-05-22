function formatDate() {
  const dateDisplay = document.getElementById("dateDisplay");
  const currentDate = new Date();

  const day = currentDate.getDate();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  const formattedDate = `${addLeadingZero(day)}/${addLeadingZero(
    month
  )}/${year}`;

  dateDisplay.textContent = formattedDate;
}

function addLeadingZero(number) {
  return number < 10 ? "0" + number : number;
}
