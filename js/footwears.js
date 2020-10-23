function footWear() {

    //INPUT:  Read the weather from the user.
    let weather = document.getElementById("weather").value;
    //PROCESSING: Select the correct input
    let shoes;
    if (weather == "Hot") {
        shoes = "sandals"
    } else if (weather == "Snow") {
        shoes = "boots"
    } else if (weather == "Rain") {
        shoes = "galoshes"
    } else if (weather == "Uknown") {
        shoes = "Unknown"
    }
    let output = shoes;

    //Output: Display the message to the user
    document.getElementById("output").innerHTML = shoes;
}