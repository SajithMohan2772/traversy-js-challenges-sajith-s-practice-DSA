function calculator(num1, num2, operator) {
let result;

// switch (operator){
//     case '+':
//     result = num1 + num2;
//     break;
//     case '-':
//     result = num1 - num2;
//     break;
//     case '*':
//     result = num1 * num2;
//     break;
//     case '/':
//     result = num1 / num2;
//     break;
//     default:
//         throw new error("invalid operator");
// }

if (operator === '+') {
result = num1 + num2;
} else if (operator === '-') {
    result = num1 - num2;
} else if (operator === '*') {
    result = num1 * num2;
} else if (operator === '/') {
    result = num1 / num2;
} else  {
    throw new error('invalid operator');
}

return result;
}

module.exports = calculator;
