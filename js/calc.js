function calculator() {
    /*input:
    user enters two numbers
    user chooses operator*/

    let num1 = parseFloat(document.getElementById('number1').value);
    let num2= parseFloat(document.getElementById('number2').value);
    let num3 = parseFloat(document.getElementById('myAnswer').value);
    let operator = (document.getElementById('operator').value);
    /*Processing:
    combine two numbers together using selected operator
    use switch case to select the operator*/
    
    let message;
    let answer;
    switch(operator) {
        case '+':
            answer = parseFloat(num1 + num2);
            if (num3 == answer){
                message = "Correct! 🏆"
            } else {
                message = "Incorrect 😥"
            }
            break;
        case '-':
            answer = parseFloat(num1 - num2);
            if (num3 == answer){
                message = "Correct! 🏆"
            } else {
                message = "Incorrect 😥"
            }
            break;
        case '*':
            answer = parseFloat(num1 * num2);
            if (num3 == answer){
                message = "Correct! 🏆"
            } else {
                message = "Incorrect 😥"
            }
            break;
        case '/':
            answer = parseFloat(num1/num2);
            if (num3 == answer){
                message = "Correct! 🏆"
            } else {
                message = "Incorrect 😥"
            }
            break;         
    }

   
    /*Output:
    Check users answer and send output message saying either correct or incorrect*/
    document.getElementById('output').innerHTML = message
}
