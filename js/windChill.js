function doInputOutput() {
    //INPUT 
    //values are taken from user input
    let temperature = parseFloat(document.getElementById("temperature").value);
    let windspeed = parseFloat(document.getElementById("windSpeed").value);
    //PROCESSING
    //set windChill to message the user to let them know the temparture you entered is too high or windSpeed entered is too low
    let windchill = "users selected temp and wind speed does not meet specifications either too high or too low.";
    // If the temperature is low enough to be within the parameter and windSpeed is higher 
    // than 3 then output will message windspeed and temperature.
    if (temperature < 50 && windspeed > 3) {
        windchill = windChill(temperature, windspeed);
    }
    //OUTPUT
        //outputs windchill to user
        document.getElementById("output").innerHTML = windchill;
    }

//this function processes the temp and speed as parameters and calaculates tempature and windSpeed
//and then returns the output of those parameters to windchill rounded to 2 decimal places.

function windChill(tempF, speed) {
    windchill = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speed, .16)) + (0.4275 * tempF * Math.pow(speed, .16));
    return windchill.toFixed(2) + " degrees Fahrenheit";
}
