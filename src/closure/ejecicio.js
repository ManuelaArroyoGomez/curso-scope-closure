const number1 = 2;
const number2 = 3;

function sumWithClosure(firstNum) {
    let number1 = firstNum;
        return function (secondNum) {
        let number2 = secondNum;
        if (!number2) {
            return number1;
        }
        else {
            return number1 + number2;
        }
    }
}
sumWithClosure();