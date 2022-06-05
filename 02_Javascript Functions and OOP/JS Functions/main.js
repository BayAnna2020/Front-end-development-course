let historyWindow = document.querySelector(".history-window"),
    allButtons = document.querySelector(".all_button"),
    historyBtn = document.getElementById("history");

historyBtn.addEventListener("click", () => {
    historyWindow.style.display = (historyWindow.style.display === "block") ? 'none' : 'block';
    allButtons.style.display = (allButtons.style.display === "none") ? 'grid' : 'none';
})

//поле, в котором все выводится
let input = document.querySelector(".input");

//сохраненная часть выражения для возведения в степень
let power = "";
let operators = ['+', '-', '*', '/', '(', ')', '.'];

//добавление элементов в input при клике
function insert(num) {
    if (!(input.textContent.endsWith(num) && operators.includes(num))) {
        if (parseInt(input.textContent) === 0) {
            input.textContent = "";
            input.textContent += num;
        } else
            input.textContent += num;
    }
}

//очистка всего содержимого
function clean() {
    input.textContent = "0";
    power = "";
}

//очистка посдеднего элемента
function back() {
    let expression = input.textContent;
    input.textContent = expression.substring(0, expression.length - 1);
    if (parseInt(input.textContent) === 0) {
        input.textContent = "0";
    }
}

//получение результата по клику =
function equal() {
    let exp = input.textContent;
    //запись результата при возведении в степень
    if (input.textContent.includes('^')) {
        let tmp = input.textContent.split('^'),
            num = eval(power),
            pow = +tmp[1];
        history();
        input.textContent = Math.pow(num, pow);
        power = "";
        return;
    }

    history();
    if (exp) {
        input.textContent = eval(exp);
    }
}

//добавление константы числа пи
function addConstantPi() {
    if (operators.includes(input.textContent.charAt(input.textContent.length - 1))) {
        if (parseInt(input.textContent) === 0) {
            input.textContent = "";
        }
        input.textContent += Math.PI;
    }
}

//добавление константы е
function addConstantE() {
    if (operators.includes(input.textContent.charAt(input.textContent.length - 1))) {
        if (parseInt(input.textContent) === 0) {
            input.textContent = "";
        }
        input.textContent += Math.E;
    }
}

//вычисление квадратного корня 
function sqrt() {
    history(); //добавить квадратный корень в историю
    input.textContent = Math.sqrt(eval(input.textContent));
}

//возведение числа в степень
function exponentiation() {
    if (!input.textContent.endsWith("^")) {
        power = input.textContent;
        input.textContent += "^";
    }
}

//сохранение истории
const output = document.querySelector("#output");

function history() {
    let li = document.createElement("li");
    li.textContent = input.textContent;
    output.appendChild(li);
}

