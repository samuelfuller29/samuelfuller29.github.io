function getShoes()
// Input weather from combo box
let weather = document.getElementById('weather').value;
// Processing
if (weather === "snow") {
    shoes = "Boots"
} else if (weather === "rain") {
    shoes = "galoshes"
} else if (weather === "hot") {
    shoes = "sandals"
} else if (weather === "unknown") {
    shoes = "shoes"
}
// Output
document.getElementById('').innerHTML = getShoes;
}