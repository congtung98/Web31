// console.log("Hello world!");

// const constVar = "Hello";

// //constVar = 10;

// let letVar = "123456";
// var varVar = "654321";

// console.log(letVar, varVar);

// letVar = 100;
// varVar = true;

// console.log(letVar, varVar);
// var undefinedVar = null;

// undefinedVar = "String";
// undefinedVar = 10000;
// undefinedVar = true;
// console.log(typeof(undefinedVar));

// var obj = {
//     key: 100,
//     key2: "joji",
//     obj2: {
//         nested: "hello",
//     },
// };

// console.log(obj.key);
// console.log(obj.obj2.nested);
// console.log(obj["key2"]);

// obj.key3 = "dmm";

// console.log(obj);

// delete obj.key2;

// console.log(obj);

// var arr = [0, "item", true, null];

// arr[1];

// arr.push(100);

// console.log(arr.length);

// // for (let index = 0; index < array.length; index++) {
// //     const element = array[index];
    
// // }

// function funcName(paramA, paramB) {
//     console.log(paramA, paramB);
// }

// funcName(1, 2);

// const varialbe = function () {
    
// }

// const arrFunc = () => {

// }

// console.log("affsfasfasfSDGSDsdfsd".toLowerCase());
// console.log("affsfasfasfSDGSDsdfsd".replace("aff","dmm"));
// console.log((1230.18923).toFixed(2));

// const now = new Date();
// console.log(now.toLocaleString("vi"));

// console.log(/([A-Z])\w+/g.test("Yasuo"));

// const err = new Error("Nhan pham ko du");

// throw err

// var - function scope
// var a = 10;

// function funcA() {
//     var b = 15;

//     console.log(a); //10
//     console.log(b); //15
// }

// funcA();

// if (true) {
//     var c = 25;
// }

// console.log(a); //10
// console.log(b); Loi~
// console.log(c);

// let - block scope
// let a = 10;

// function funcA() {
//     let b = 15;

//     console.log(a); //10
//     console.log(b); //15
// }

// funcA();

// if (true) {
//     let c = 25;
// }

// console.log(a); //10
// //console.log(b); Loi~
// console.log(c);

// function print(num, countTime) {
//     setTimeout(function() {
//         console.log(num);
//     }, countTime*1000);
// }

// function countDown(countNum) {
//     for (var i = countNum; i >= 0; i--) {
//         print(i, countNum - i);
//     }
// }

// countDown(5)

// console.log("A");

// setTimeout(function() {
//     console.log("B");
// }, 1000);

// console.log("C");
// var arr = [];

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
    for (var i = 0; i < testLengthArray.length; i++) { 
        var arr = [];
        for ( var j = 0; j < testLengthArray[i]; j++ ) {
        
            var randomNumber = Math.floor(Math.random() * 1000);
            arr.push(randomNumber);
        }
        var randomTarget = Math.floor(Math.random() * 1000);
        testLengthArray[i] = {
            input: sort(arr),
            target: randomTarget,
            output: search(arr, randomTarget) 
      }
    }
    return testLengthArray;
}
var i = [187,158,442,474,154,73,228,205,370,320,399,494,100,84,462,275,335,448,309,221,32,427,439,144,448,182,88,213,174,133,427,420,155,11,247,487,387,110,89,299,136,498,67,223,347,135,220,84,20,20,319,480,385,130,74,195,326,286,299,181,81,423,172,224,431,279,96,127,195,75,328,452,199,313,252,128,390,322,91,356,27,363,206,7,38,72,56,244,470,146,444,30,164,225,438,303,382,33,390,56,421,463,224,442,185,416,125,76,89,488,127,226,42,499,77,463,114,407,101,490,375,22,413,166,176,128,146,431,253,203,326,463,104,263,12,436,267,461,18,301,44,1,365,240,97,193,298,78,400,111,396,294,212,445,150,313,487,252,60,326,245,264,154,108,78,274,94,200,260,329,415,430,58,360,432,480,57,328,119,400,69,208,240,334,95,490,94,312,18,59,259,490,485,62,266,175,198,85,457,139,275,412,208,77,470,44,488,235,494,499,126,83,27,324,401,61,394,362,96,462,171,335,208,99,17,57,40,360,346,299,201,227,189,488,85,372,83,279,345,345,474,388,211,97,293,207,298,168,219,192,443,446,442,269,393,448,451,270,201,289,458,63,293,420,223,486,466,185,35,422,349,428,3,351,297,6,150,76,362,304,88,67,69,147,127,198,309,467,95,319,79,120,271,363,419,372,457,457,44,475];
// console.log(arr);
// console.log(generate(i));
function test(testLengthArray) {
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
    for (var i = 0; i < testLengthArray.length; i++) { 
        var arr = [];
        for ( var j = 0; j < testLengthArray[i]; j++ ) {
        
            var randomNumber = Math.floor(Math.random() * 1000);
            arr.push(randomNumber);
        }

        console.log(sort(arr).length);
        console.log(testLengthArray[i])   
    }
}
console.log(test(i));
