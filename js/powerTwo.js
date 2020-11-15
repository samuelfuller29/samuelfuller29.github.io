/*INPUT: None
 *PROCESSING: Interate from 0 to 31 and calculate the successive powers of 2
 *OUITPUT: S string of the power resutts seperated by a comma with the last result not followed by a comma
 */
function powerTwo() {
    //Initialize variables
    let powerTwo = "";
    let powerOut = "";
    let p = 0;
    //Calculate the powers of 2 from 0 through 31
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