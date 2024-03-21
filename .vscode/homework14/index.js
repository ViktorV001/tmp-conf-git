function arrayProcessor(array, callback) {
  const stringArray = array.map((item) => String(item));
  return callback(stringArray);
}
function toUpperCaseCallback(array) {
  return array.map((item) => item.toUpperCase());
}
function sumLengthsCallback(array) {
  return array.reduce((acc, curr) => acc + curr.length, 0);
}

const myArray = [1, 2, 3, 4, 5];
const result1 = arrayProcessor(myArray, toUpperCaseCallback);
console.log(result1);
const myStringsArray = ["hi", "Land", "von", "Viktor"];
const result2 = arrayProcessor(myStringsArray, sumLengthsCallback);
console.log(result2);




let arrayProcessor = (inputArray, operateOnArray)=>{
    let stringArray = [];
    for(let i =0; i<inputArray.length; i++){
        stringArray.push(String(inputArray[i]));
    }
    let resultOperateOnArray = operateOnArray(stringArray); // 2
    return resultOperateOnArray; // 3
};

let function1 = (initialArray)=>{
    let upperCaseStringArray = [];
    for(let i=o; i<initialArray.length; i++){
        upperCaseStringArray.push(initialArray[i].toUpperCase());
    }
    return upperCaseStringArray;
};
let function2 = (initialArray)=>{
    let sumStrings = 0;
    for(let i = 0; i<initialArray.length; i++){
        sumStrings += initialArray[i].length;

    }

    return sumStrings;

};
/*
let userArray = ["Tom", "Bob", "Bill"];
console.log(arrayProcessor(userArray, function1));
console.log(arrayProcessor(userArray, function1));
*/

//arrayProcessor([], function1);
//arrayProcessor([], function2);

console.log(arrayProcessor([1, true, "hi", null], function1));
console.log(arrayProcessor(["Red", "Blue","Green"], function2));


