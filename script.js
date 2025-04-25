let display = document.getElementById("display");

function appendNumber(number) {
    display.value += number;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        // Substitui o símbolo ^ por ** para que o JavaScript reconheça como potência
        display.value = display.value.replace("^", "**");
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Erro";
    }
}