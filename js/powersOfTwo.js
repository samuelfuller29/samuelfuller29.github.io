//INPUT: No Input
 //PROCESSING: Iterate from 0 to 31 and calculate the successive powers of 2
 //OUITPUT: empty string of the power results seperated by a comma with the last result
  //not followed by a comma
 
function PowersOfTwo() {
    //Initialize variables
    let pow2 = "";
    let powerOut = "";
    let p = 0;
    //Calculate the powers of 2 from 0 through 31, inclusive.
    for (p = 0; p <= 31; p++) {
        pow2 = Math.pow(2, p);
        if (p < 31) {
            powerOut = powerOut + pow2 + ", ";

        } else {
            powerOut = powerOut + power;
        }
    }


    //OUTPUT
    document.getElementById("output").innerHTML = powerOut;
}
