/**
 * leetcode problem # 344: Reverse String
 * Write a function that reverses a string. The input string is given as an array of characters s.
 * You must do this by modifying the input array in-place with O(1) extra memory.
 * input: s = ["h","e","l","l","o"]
 * output: ["o","l","l","e","h"]
 * input: s = ["H","a","n","n","a","h"]
 * output: ["h","a","n","n","a","H"]
 *  
 */

const reverseString = (s) => {
    let n = s.length;
    let halfLen = Math.floor(n / 2);
    for (let i = 0; i < halfLen; i++) {
        let temp = s[i];
        s[i] = s[n - 1 - i];
        s[n - 1 - i] = temp;
        
    }
    return s;
}
let s = ["h","e","l","l","o"];
let result = reverseString(s);
console.log(result);

// Alternative: two pointers move inward, swapping characters in-place.
// Your original solution is already optimal: O(n) time and O(1) extra space.
// This version avoids repeatedly calculating the opposite index.
const reverseStringTwoPointers = (s) => {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        const temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
        right--;
    }

    return s;
};
