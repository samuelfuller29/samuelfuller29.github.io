function sumOdds() {
    /*INPUT: Take a number input from the user,"userInput", to select "sumOddsTotal", 
    declare and set the value of the variable "SumOddstotal" with "number1".
    Declare "number" which will start with 1 and add all odd numbers included within 
    the number from the user input to declare the variable "sumOdd" 
    which will be the final answer.*/

    let sumOddsTotal = document.getElementById("userInput").value;
    let number = 1;
    let sumOdd = 0;

    //PROCESSING: Use a while loop to iterate from "number" to "sumOddsTotal" and add each odd number to "sumOdd".
    while (number <= sumOddsTotal) {
        if (number %2 != 0) {
            sumOdd = sumOdd + number;
        }
        number++;
    }



    //OUTPUT:
    document.getElementById("output").innerHTML = "The sum of odd numbers is " + sumOdd;
}