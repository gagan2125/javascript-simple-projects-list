function startSort(type) {
  const input = document.getElementById("arrayInput").value;
  const array = input.split(",").map(Number);

  if (array.some(isNaN)) {
    alert("please enter a valid list of numbers");
    return;
  }

  switch (type) {
    case "bubble":
      bubbleSort(array);
      break;
    case "selection":
      selectionSort(array);
      break;
    case "insertion":
      insertionSort(array);
      break;
    default:
      break;
  }
}

function bubbleSort(array) {
  let n = array.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        updateArrayDisplay(array);
      }
    }
  }
}

function selectionSort(array) {
  let n = array.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
      updateArrayDisplay(array);
    }
  }
}

function insertionSort(array) {
  let n = array.length;
  for (let i = 1; i < n; i++) {
    let key = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j = j - 1;
      updateArrayDisplay(array);
    }
    array[j + 1] = key;
    updateArrayDisplay(array);
  }
}

function updateArrayDisplay(array) {
  const arrayContainer = document.getElementById("arrayContainer");
  arrayContainer.innerHTML = "";
  array.forEach((num) => {
    const element = document.createElement("div");
    element.className = "array-element";
    element.innerText = num;
    arrayContainer.appendChild(element);
  });
}
