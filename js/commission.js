/*INPUT: Get sales total from user
 *PROCESSING: Find the commission based the amount of sales
 *OUITPUT: The commission amount
 */
function getCommission() {
    let sales = parseFloat(document.getElementById("sales").value);
    let commissionrate = 0;
    if (sales < 300) {
        commissionrate = 0;
    } else if (sales < 600) {
        commissionrate = 0.02;
    } else if (sales < 1000) {
        commissionrate = 0.025;
    } else {
        commissionrate = 0.03;
    }

    //Calculate the amount of commission
    let commission = sales * commissionrate;
    let earnings = sales + commission;
    //Change the earnings to have 2 decimal places at the end to properly calculate dollar 
    //amount with cents.
    let digits = 2;
    let multiplier = Math.pow(10, digits);
    earnings = Math.round(earnings * multiplier) / multiplier;
    earnings = earnings.toFixed(2);
    //Message the use about the commission amount
    document.getElementById('output').innerHTML = "Your earnings are $" + earnings;
}