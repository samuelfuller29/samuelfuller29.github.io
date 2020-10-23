function footWear() {

    //INPUT:  Get the weather value from the user.
    let weather = document.getElementById("weather").value;
    //PROCESSING: Take the input weather from the combo box and combine it to the shoe type the user will want to wear.
    let shoes;
    if (weather == "Hot") {
        shoes = "If it is hot let's wear sandals"
    } else if (weather == "Snow") {
        shoes = "If it is snowing let's wear boots"
    } else if (weather == "Rain") {
        shoes = "If it is raining let's wear galoshes"
    } else if (weather == "Unknown") {
        shoes = "Then it is hard to decide what shoes to wear"
    }
    let output = shoes;

    //Output: Display the message to the user with shoes for the weather selected.
    document.getElementById("output").innerHTML = shoes;
}