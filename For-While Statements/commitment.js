// I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

// using for loop
for(commitment  = 1; commitment <= 60; commitment++){
    console.log(`Day: ${commitment} "I will invest at least 6 hrs every single day for next 60 days!" `);
    // `steric sign allows to print the variable name commitment inside the string`
}

// using while loop
let Commitment = 0;
while(Commitment<= 60){
    Commitment++; 
    console.log(`Day: ${Commitment} "I will invest at least 6 hrs every single day for next 60 days!" `);
}

