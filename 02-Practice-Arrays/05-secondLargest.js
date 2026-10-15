const findSecondLargest = (arr) => {
  if (arr.length < 2) {
    return "Array must contain at least two elements.";
  }
  // if (arr.length === 2) {
  //   return arr[0] > arr[1] ? arr[1] : arr[0];
  // }
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
};

let arr = [4, 9];

let result = findSecondLargest(arr);

console.log(result);
