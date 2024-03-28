/*
Exercise 1: maxOfTwoNumbers

In this exercise, create a function named maxOfTwoNumbers. It should take two numbers as inputs and return the larger number. If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(4, 7));

/*
Exercise 2: maxOfThree

Define a function, maxOfThree, it should accept three numbers and return the largest among them.

Complete Exercise 2 in the space below:
*/
const maxofThree = (x, y, z) => {
    if (x > y && x > z) {
        return x;
    }
    else if (y > x && y > z){
        return y;
    }
    else if (z > x && z > y){
        return z;
    }
    else{
        console.log("There is more than one biggest number.");
    }
}

console.log('Exercise 2 Result:', maxofThree(4, 9, 2));

/*
Exercise 3: Insert at the Beginning

Write a function named isCharAVowel that takes a single character as an argument. It should return true if the character is a vowel, and false otherwise.

Complete Exercise 3 in the space below:
*/

const isCharAVowel = (x) => {
    if (x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u'){
        return true;
    }
    else if (x === 'y') {
        console.log('Sometimes true.');
    }
    else {
        return false;
    }
}

console.log('Exercise 3 Result:', isCharAVowel('u'));

/*
Exercise 4: sumArray

Create a function called sumArray. It should take an array of numbers and return the total sum. For example, sumArray([2, 4, 5]) should return 11.

Complete Exercise 4 in the space below:
*/

let randomArray = [5, 9, 32];
const sumArray = ([x, y, z]) => {
    return (x + y + z);
}

console.log('Exercise 4 Result:', sumArray(randomArray));

/*
Exercise 5: multiplyArray

Define a function called multiplyArray. It should take an array of numbers and return the product of those numbers. For example, multiplyArray([2, 4, 5]); would return 40.

Complete Exercise 5 in the space below:
*/

const multiplyArray = ([x, y, z]) => {
    return (x * y * z);
}

console.log('Exercise 5 Result:', multiplyArray(randomArray));

/*
Exercise 6: reverseString

Define a function called reverseString. It should take a string and return it with its characters in reverse order. For example, reverseString('rockstar'); would return the string "ratskcor".

Complete Exercise 6 in the space below:
*/
let aWholeWord = ('wildflower');
const reverseString = (text) => {
    let reverseWord = '';
    for (i = text.length - 1; i >= 0; i--){
        reverseWord += text[i];
    }
    return reverseWord;
}
console.log('Exercise 6 Result:', reverseString(aWholeWord));

/*
Exercise 7: longestStringInArray

Define a function called longestStringInArray. It should accept an array of strings and return the length of the longest string in the array.

Complete Exercise 7 in the space below:
*/

let strArray = ['Romel', 'Powell', 'Serrano']
const longestStringInArray = ([x, y, z]) => {
    if(x.length > y.length && x.length > z.length){
        return x.length;
    }else if(y.length > x.length && y.length > z.length){
        return y.length;
    }else if(z.length > x.length && z.length > y.length){
        return z.length;
    }else {
        console.log("At least two strings in this array are the same length.")
    }

}

console.log('Exercise 7 Result:', longestStringInArray(strArray));

/*
Exercise 8: stringsLongerThan

Write a function called stringsLongerThan. It takes an array of strings and a number, returning all strings longer than the given number. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3) would return ['hello', 'morning'].

Complete Exercise 8 in the space below:
*/

let num = 8;
let anotherArray = (['dictionary', 'absolutely', 'blank'])
const stringsLongerThan = ([x, y, z], num) => {
    if (x.length > num && y.length > num && z.length > num){
        return [x, y, z];
    }
    else if (x.length > num && y.length > num){
        return [x, y];
    }
    else if (x.length > num && z.length > num){
        return [x, z];
    }
    else if (y.length > num && z.length > num){
        return [y, z];
    }
    else if (x.length > num){
        return [x];
    }
    else if (y.length > num){
        return [y];
    }
    else if (z.length > num){
        return [z];
    }
    else {
        console.log('None of the strings are longer than the number')
    }
}

console.log('Exercise 8 Result:', stringsLongerThan(anotherArray, num));
