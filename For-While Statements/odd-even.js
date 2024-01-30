// Find all the odd numbers from 61 to 100.

//using for loop
for(oddNumber = 61; oddNumber <=100; oddNumber++){
    if(oddNumber % 2 == 1){
        console.log(oddNumber)
    }
}

//using while loop
let OddNumber = 61;
while(OddNumber <= 100){
    if(OddNumber % 2 == 1){
        console.log(OddNumber);
    }
    OddNumber++;
}


// Find all the even numbers from 78 to 98.
// using for loop

for(evenNumber = 78; evenNumber <=98; evenNumber++){
    if(evenNumber % 2 == 0){
        console.log(evenNumber)
    }
}

//using while loop
let EvenNumber = 78;
while(EvenNumber <= 98){
    if(EvenNumber % 2 == 0){
        console.log(EvenNumber);
    }
    EvenNumber++;
}