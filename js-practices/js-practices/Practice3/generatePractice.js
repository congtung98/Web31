'use strict'

function generate(testLengthArray){
  function search(input, target) {
    for (var k=0; k < input.length; k++){
        if(input[k] === target){
          return k;
        }
      }
      return -1;
  }
  function sort(input) {
    //Bubble sort
      let len = input.length;
      for (let i = 0; i < len; i++) {
          for (let j = 0; j < len; j++) {
              if (input[j] > input[j + 1]) {
                  let temp = input[j];
                  input[j] = input[j + 1];
                  input[j + 1] = temp;
              }
          }
      }
      return input;
    }
  for (let i = 0; i < testLengthArray.length; i++) { 
    let arr = [];
    for ( let j = 0; j < testLengthArray[i]; j++ ) {   
      let randomNumber = Math.floor(Math.random() * 1000);
      arr.push(randomNumber);
    }
    let randomTarget = Math.floor(Math.random() * 1000);
    testLengthArray[i] = {
        input: sort(arr),
        target: randomTarget,
        output: search(arr, randomTarget)
    }
  }
  return testLengthArray;
}

module.exports = generate
