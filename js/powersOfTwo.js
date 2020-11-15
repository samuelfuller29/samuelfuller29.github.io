//INPUT: No Input
 //PROCESSING: Iterate from 0 to 31 and calculate the successive powers of 2
 //OUITPUT: empty string of the power results seperated by a comma with the last result
  //not followed by a comma
 
function PowersOfTwo() {
    //Input variables
    let pow2 = "";
    let powerOutput = "";
    let p = 0;
    //Calculate the powers of 2 from 0 through 31, inclusive.
    for (p = 0; p <= 31; p++) {
        pow2 = Math.pow(2, p);
        if (p < 31) {
            powerOutput = powerOutput + pow2 + ", ";

        } else {
            powerOutput = powerOutput + pow2;
        }
    }


    //OUTPUT
    document.getElementById("output").innerHTML = powerOutput;
}
