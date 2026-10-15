let n = 4;

for(let i = 0; i < n; i++){
    let row = "";
    for(let j = 0; j <= i; j++){ // j < i+1 is equal to j <= i
        row = row + "* ";
    }
    console.log(row)
}