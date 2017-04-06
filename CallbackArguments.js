// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i);   // execute callback: I just passed the index into our call back function
    }
  }
}

function actionWhenFound(idx) {

  console.log("found Waldo at index " + idx + '!');
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);