function fiveTimes() {
    //INPUT
     // There isn't an input 
    //PROCESSING
    //Loop 12 times 
    let output = "";
    for (let i = 1; i <= 12; i++) {
        output += "5 x " + i + " = " + i * 5 + "<br>";
    }
    //OUTPUT
    //Outputs the times table
    document.getElementById("output").innerHTML = output;
}