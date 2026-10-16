const countDigits = (n) => {
    // handle the case when n is 0
    if(n == 0) return 1;

    let count = 0;
    // handle negative numbers by taking the absolute value
    n = Math.abs(n);

    while (n > 0) {
        n = Math.floor(n / 10);
        count++;
    }
    return count;
}

let num = 235;

let result = countDigits(num);

console.log(result);