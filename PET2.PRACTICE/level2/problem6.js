// Implement a calculator program where we have operators (it can be ‘+’, ‘/’, ‘*’, ‘-’) and two numbers number1 and number2. Based on the character the program should add, subtract, multiply and divide accordingly.

// Eg if operator = ‘+’, number1=10, number=25 print 35.

// For example:

// Test	Result
// calculator('+', 10, 3);
// 13
// calculator('-', 10, 7);
// 3

function numbers(operators,number1,number2){

    let result=0;

    switch(operators){
        case "+":
            result=number1+number2
            console.log(result);
            break;
        
        case "-":
             result=number1-number2
            console.log(result);
            break;
         case "*":
            result=number1*number2
            console.log(result);
            break;
        case "%":
            result=number1%number2
            console.log(result);
            break;
    }


}numbers('-', 10, 3);

