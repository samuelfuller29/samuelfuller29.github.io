function fiveTimes() {
    //INPUT
     // There isn't an input 
    
    //PROCESSING
    //Loop through table 12 times 
    let output = "";
    for (let i = 1; i <= 12; i++) {
        output += "5 x " + i + " = " + i * 5 + "<br>";
    }
    //OUTPUT
    //Outputs the times table from 1 to 12 each mutiplied by 5
    document.getElementById("output").innerHTML = output;
}