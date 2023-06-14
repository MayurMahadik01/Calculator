function clearResult() {
    document.getElementById('result').value = '';
}

function appendNumber(number) {
    document.getElementById('result').value += number;
}

function appendOperator(operator) {
    document.getElementById('result').value += operator;
}

function calculate() {
    var result = document.getElementById('result').value;
    try {
        var calculatedResult = eval(result);
        document.getElementById('result').value = calculatedResult;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}


