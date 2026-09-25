const findSmallest = (arr) => {
  let smallest = Infinity;
  // let smallest = arr[0]; // Initialize smallest with the first element of the array
  // let smallest = Math.min(...arr); // Use Math.min to find the smallest number in the array
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return `The smallest number in the array is: ${smallest}`;
};
const arr = [1, 5, 8, 4, 2, 9];
console.log(findSmallest(arr));
