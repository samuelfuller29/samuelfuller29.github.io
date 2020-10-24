function calculator() {
    //input:
    //student imputs their numbers
    //student inputs their operator

    let nummber1 = parseFloat(document.getElementById('number1').value);
    let number2= parseFloat(document.getElementById('number2').value);
    let myAnswer = parseFloat(document.getElementById('myAnswer').value);
    let operator = (document.getElementById('operator').value);
    //Processing:
    //compute the problem
    //use switch case for operator
    
    let message;
    let answer;
    switch(operator) {
        case '+':
            answer = parseFloat(number1 + number2);
            if (myAnswer == answer){
                message = "You are correct! 🏆" 
            } else {
                message = "Incorrect 😥, try again."
            }
            break;
        case '-':
            answer = parseFloat(number1 - number2);
            if (myAnswer == answer){
                message = "You are correct! 🏆"
            } else {
                message = "Incorrect 😥, try again."
            }
            break;
        case '*':
            answer = parseFloat(number1 * number2);
            if (myAnswer == answer){
                message = "You are correct! 🏆"
            } else {
                message = "Incorrect 😥, try again."
            break;
        case '/':
            answer = parseFloat(numebr1/number2);
            if (myAnswer == answer){
                message = "You are correct! 🏆"
            } else {
                message = "Incorrect 😥, try again."
            }
            break;         
    }

   
    //Output:
    //Check their answer
    document.getElementById('output').innerHTML = message
}
