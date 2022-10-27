function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

const number1 = parseInt(prompt("Enter a number: "));
const number2 = parseInt(prompt("Enter another number: "));
const num1String = number1.toString()
const num2String= number2.toString()

window.alert(num1String + "+" + num2String + "=" + add(number1, number2));

window.alert(num1String + "-" + num2String + "=" + subtract(number1, number2));

window.alert(num1String + "*" + num2String + "=" + multiply(number1, number2));

window.alert(num1String + "/" + num2String + "=" + divide(number1, number2));