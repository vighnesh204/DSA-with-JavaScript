let n = 5;

for(let i = 0; i < n; i++){
    let row ="";
    // adding empty spaces before the stars
    for(let j = 0; j < n-(i + 1); j++){
        row += " ";
    }
    // adding stars after the empty spaces
    for(let k = 0; k < i+1; k++){
        row += "*"
    }
    console.log(row)
}

/** Output:
    *
   **
  ***
 ****
*****
*/