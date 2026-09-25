// Write a function that returns the largest number in an array.

const findLargest = (arr) => {
  let largest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return `The largest number in the array is: ${largest}`;
};
const arr = [1, 5, 8, 4, 2, 9];
console.log(findLargest(arr));
