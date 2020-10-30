function calculateDiscount() {
    //INPUT

    //Take user input and convert to a real number using parseFloat
    let subtotal = parseFloat(document.getElementById("subtotal").value);

    //Input from the computer to determine day of the week
    let dayOfWeek = new Date().getDay();

    //PROCESSING

    //Use if statement to apply discount if the subtotal purchase is over $50 on tuesday or wednesday
    if (subtotal > 50 && (dayOfWeek == 2 || dayOfWeek == 3)) {
        subtotal -= subtotal * .1;
    } 

    //adding tax
    let withTax = subtotal * .06 + subtotal;

    //OUTPUT

    //Outputs the total cost after possible discount is applied and tax is added
    document.getElementById("output").innerHTML = "$" + withTax.toFixed(2);
}