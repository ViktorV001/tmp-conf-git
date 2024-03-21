// задача 1
function max(a, b) {
return Math.max(a, b);
}
var result = (5, 10);
console.log(result);

// задача 2
function n (string, n){
    return string.slice(0, n);
}
var result1 = n ("HI", 2);
var result2 = n ("Wie gehts", 9);
var result3 = n ("Gut", 3);
console.log(result1);
console.log(result2);
console.log(result3);


//задача 3
function array(array,element){
    return array.indexOf(element)
    == -1;
}
var array = [1, 2, 3, 4, 5];
var element1 = 3;
var element2 = 6;

var result1 = array(array,element1);
var result2 = array(array,element2);

console.log(result1);
console.log(result2);

//задача1
function getBiggerNumber(number1, number2) {
    return number1> number2 ? number1 : number2; //2 вариант  if(number1 > number2){ 
        //rerurn number1
    //} else if (number1 < number2){ 
        //return number2 
    //} else {
        //return "Значения равны или неверный ввод"
    //}

}
let maxNumber=getBiggerNumber(-5,6);
console.log(maxNumber);

// задача 2
function getSubstring(oldString, n){
    return oldString.substring(0, n);
}
let newSubstring1 = getSubstring("Hello", 2);
let newSubstring2 = getSubstring("Hello", 1);
let newSubstring3 = getSubstring("Hello", 4);

console.log(newSubstring1, newSubstring2, newSubstring3)

//задача 3
function searchElement (customArray, searchElement){
    for(let i=0; i<customArray.length; i++){
        if(customArray[i] === searchElement) {
            return true;
        }
    }
    return false;
}

console.log(searchElement([1,5,4], 3));

//вариант2
function searchElement (customArray, searchElement){
    return customArray.indexOf(searchElement) !== -1;

}

console.log(searchElement(["a", "b", "c"], "1"));
