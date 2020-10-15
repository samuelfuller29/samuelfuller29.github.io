function poundsToKilograms() {
//INPUT
let pounds = parseFloat(document.getElementById('pounds').value);
//PROCESSING
//conversion factor from pounds to Kilograms is
let kilograms = pounds / 2.20462262185;
//OUTPUT
document.getElementById('output').textContent =
pounds + "  pounds is " + kilograms.toFixed(1) + " Kilograms";
}