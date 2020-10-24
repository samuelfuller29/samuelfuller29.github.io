function myCalculator() {
    /*input:
    student imputs two numbers of thier choosing
    student inputs their operator +,-,*,or/ */

    let number1 = parseFloat(document.getElementById('number1').value);
    let number2= parseFloat(document.getElementById('number2').value);
    let myanswer = parseFloat(document.getElementById('myanswer').value);
    let operator = (document.getElementById('operator').value);
    /*Processing:
    compute the problem
    using a switch case for operator*/
    
    let message;
    let answer;
    switch(operator) {
        case '+':
            answer = parseFloat(num1 + num2);
            if (myanswer == answer){
                message = "Correct!🏆"
            } else {
                message = "Incorrect 😥"
            }
            break;
        case '-':
            answer = parseFloat(num1 - num2);
            if (myanswer == answer){
                message = "Correct! 🏆"
            } else {
                message = "Incorrect 😥."
            }
            break;
        case '*':
            answer = parseFloat(num1 * num2);
            if (myanswer == answer){
                message = "Correct! 🏆"
            } else {
                message = "Incorrect 😥."
            }
            break;
        case '/':
            answer = parseFloat(num1/num2);
            if (myanswer == answer){
                message = "Correct! 🏆"
            } else {
                message = "Incorrect 😥"
            }
            break;         
    }

   
    /*Output:
    Check their answer*/
    document.getElementById('output').innerHTML = message
}
