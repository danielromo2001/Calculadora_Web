import { calculate } from '../application/calculatorUseCase.js';

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('calculateButton').addEventListener('click', () => {
        const operation = document.querySelector('input[name="operation"]:checked').value;
        const a = parseFloat(document.getElementById('inputA').value);
        const b = parseFloat(document.getElementById('inputB').value);
        const result = calculate(operation, a, b);
        document.getElementById('result').textContent = result;
    });
});

