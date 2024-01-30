// generate a multiplication table for number 5
// using for loop

let multiplier = 0;

for(i = 1; i <= 10; i++){
    multiplier = 5 * i;
    console.log(`5 * ${i} =`,multiplier);
}

// using while loop
let Multiplier = 0;
let a = 1;

while(a <= 10){
    Multiplier = 5 * a;
    console.log(`5 * ${a} =`,Multiplier); 
    a++;
}