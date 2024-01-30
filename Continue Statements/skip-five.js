// display odd number from 55 to 85 and skip the numbers divisible by 5.

for (odd = 55; odd <= 85; odd++){

    if(odd % 2 !==0){
    if(odd % 5 == 0){
        continue;
    }
    console.log(odd);
    }
}