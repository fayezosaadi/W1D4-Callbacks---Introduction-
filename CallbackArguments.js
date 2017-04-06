//This is the 2st solution of call-back function using forEach function.

  function findWaldo(arr, found) {
    arr.forEach(function(e,i){
      if (e === "Waldo") {
        found(i);
      }
    });
  }


  function actionWhenFound(ind) {

    console.log("found Waldo at index " + ind + '!');
  }

  findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);




// The second argument/parameter is expected to be a function
//This is the 1st solution of call-back function using a for loop method.

  //   for (var i = 0; i < arr.length; i++) {
  //     if (arr[i] === "Waldo") {
  //       found(i);   // execute callback: I just passed the index into our call back function
  //     }
  //   }
  // }

  // function actionWhenFound(idx) {

  //   console.log("found Waldo at index " + idx + '!');
  // }

  // findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
