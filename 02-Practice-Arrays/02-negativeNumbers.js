const countNegatives = (arr) => {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
};
const arr = [-2, 4, 5, -5, -1, 6];
console.log(countNegatives(arr));
