// leetcode 9. Palindrome Number
// Given an integer x, return true if x is a palindrome, and false otherwise.
// An integer is a palindrome when it reads the same backward as forward. For example, 121 is a palindrome while 123 is not.

const isPalindrome = (n) => {
  if (n < 0) return false;

  let nCopy = n;

  let rev = 0;
  while (n > 0) {
    let rem = n % 10;
    rev = 10 * rev + rem;
    n = Math.floor(n / 10);
  }
  //    return rev === nCopy ? true : false;
  return rev === nCopy;
};

let num = 121;
let result = isPalindrome(num);

console.log(result);
