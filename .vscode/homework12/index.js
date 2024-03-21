//задача 1
for (let i = 2; i <= 20; i += 2){
    console.log(i);
}
//1
// for (let i = 1; i<=20; i++) {
   // if (i % 2 === 1) {
     //   continue;
    //}
    //console.log(i);
//}

//задача 2
const numbers = [2, 4, 6, 8, 10];
for (let i=0; i < numbers.length;
    i++){
        console.log(numbers[i] * 2);
    }
//2
//let array = [2, 4, 6, 8, 10];
//for (let i = 0; i < array.length; i++) {
  //  let arrayItem = array[i];
    //console.log((arrayItem *=2));
//}
//console.log(array);

//3
let numbersArray = [10, 15, 20, 25, 30];
let sum = 0;
for (i=0; i < numbersArray.length; i++) {  //2 for (let i = 0; i < numbersArray.length; i++) {
    sum+= numbersArray[i];
}
let result = sum/numbersArray.length;
console.log(result);