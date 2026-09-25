const searchElement = (nums, key) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === key) {
      return i;
    }
  }
  return -1;
}; 

let nums = [1, 5, 8, 4, 2, 9];
console.log(searchElement(nums, 4));
