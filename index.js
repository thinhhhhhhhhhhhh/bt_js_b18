let numbers = [];

function addNumber() {
  const inputNumber = document.getElementById('inputNumber').value;
  numbers.push(parseInt(inputNumber));
  document.getElementById('inputNumber').value = '';
}

function calculate() {
  let sumPositive = 0;
  let countPositive = 0;
  let minNumber = Number.MAX_VALUE;
  let minPositiveNumber = Number.MAX_VALUE;
  let lastEvenNumber = -1;

  numbers.forEach(function(number) {
    if (number > 0) {
      sumPositive += number;
      countPositive++;
    }

    if (number < minNumber) {
      minNumber = number;
    }

    if (number > 0 && number < minPositiveNumber) {
      minPositiveNumber = number;
    }

    if (number % 2 === 0) {
      lastEvenNumber = number;
    }
  });

  document.getElementById('result').innerHTML =
    'Tổng các số dương: ' + sumPositive + '<br>' +
    'Số lượng số dương: ' + countPositive + '<br>' +
    'Số nhỏ nhất: ' + minNumber + '<br>' +
    'Số dương nhỏ nhất: ' + (minPositiveNumber !== Number.MAX_VALUE ? minPositiveNumber : 'Không có số dương') + '<br>' +
    'Số chẵn cuối cùng: ' + (lastEvenNumber !== -1 ? lastEvenNumber : 'Không có số chẵn');
}
