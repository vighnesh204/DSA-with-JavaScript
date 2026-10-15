let n = 5

let toggle = 1;
for(let i = 1; i <= n; i++){
    let row = "";
    
    for(let j = 1; j <= i; j++){
        row += toggle + " ";
        if(toggle == 1){
            toggle = 0;
        }
        else{
            toggle = 1;
        }
    }
    console.log(row);
}
