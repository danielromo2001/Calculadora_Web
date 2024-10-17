function calculate(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, introduzca números válidos.");
        return;
    }

    switch (operation) {
        case 'sum':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                alert("Error: División por cero no permitida.");
                return;
            }
            result = num1 / num2;
            break;
        default:
            alert("Operación no válida");
            return;
    }

    document.getElementById('result').textContent = `El resultado es: ${result}`;
}
