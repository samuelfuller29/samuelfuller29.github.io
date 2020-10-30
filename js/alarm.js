function sleepCheck() {
    /*INPUT
    all the input is taken from the computer: Date, Month, Week*/

    let now = new Date();
    let month = now.getMonth();
    let dayOfMonth = now.getDate();
    let dayOfWeek = now.getDay();

    /*PROCESSING
    set message to get up if not a weekend or specified holiday */
    
    let message = "Get Up!";

    /*if statement message changes to "Sleep in" if the current day is any of the following:
    sunday, sautrday, New Year’s Day, U.S. Independence Day, & Christmas*/

    if (dayOfWeek == 0 || dayOfWeek == 6 || (month == 0 && dayOfMonth == 1) || (month == 6 && dayOfMonth == 4) || (month == 11 && dayOfMonth == 25) ) {
        message = "Sleep in";
    } 

    /*OUTPUT
    outputs the message pf either "Get up!" or "Sleep in" */

    document.getElementById("output").textContent = message;
}