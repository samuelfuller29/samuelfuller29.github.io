/*INPUT: None
 *PROCESSING: iterate from 0 to 31 and calculate the inclusive powers of 2
 *OUTPUT: string of the power results seperated by a comma with the last result 
 not followed by a comma*/

 function powerTwo() {
    //establish variables
    let powerTwo = "";
    let powerOut = "";
    let p = 0;
    //Calculate the powers of 2 from 0 through 31 inclusive
    for (p = 0; p <= 31; p++) {
        powerTwo = Math.pow(2, p);
        if (p < 31) {
            powerOut = powerOut + powerTwo + ", ";

        } else {
            powerOut = powerOut + powerTwo;
        }
    }


    //OUTPUT
    document.getElementById("output").innerHTML = powerOut;
}