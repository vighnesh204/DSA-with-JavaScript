// leetcode 7. Reverse Integer
// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.

const reverseInteger = (n) => {
    // store the original value of n to check if it was negative later
    let nCopy = n;
    // take the absolute value of n to handle negative numbers
    n = Math.abs(n);

    let rev = 0;
    while (n > 0) {
        let rem = n % 10;
        rev = 10 * rev + rem;
        n = Math.floor(n / 10);
    }
    // to check if the reversed integer is within the 32-bit signed integer range, we can use Math.pow(2, 31) to get the limit.
    let limit = Math.pow(2, 31);
    // let limit = 2 ** 31;
    if(rev < -limit || rev > limit) return 0;

    return nCopy < 0 ? -rev : rev;
}

let num = 123;
let result = reverseInteger(num);
console.log(result);