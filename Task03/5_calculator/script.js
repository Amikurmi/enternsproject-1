// Select the display element
const display = document.getElementById('display');

// Function to clear the display
function clearDisplay() {
    display.value = '';
}

// Function to delete the last character from the display
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Function to append a number or decimal to the display
function appendNumber(number) {
    display.value += number;
}

// Function to append an operator to the display
function appendOperator(operator) {
    const lastChar = display.value[display.value.length - 1];
    // Prevent consecutive operators
    if (['+', '-', '*', '/'].includes(lastChar)) {
        return;
    }
    display.value += operator;
}

// Function to calculate the result
function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
