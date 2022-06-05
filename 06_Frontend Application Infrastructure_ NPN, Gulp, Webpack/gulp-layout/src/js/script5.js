checkStringAsPalindrome(prompt("Введите слово для проверки на палиндром"));

function checkStringAsPalindrome(str) {
    str = str.toLowerCase().replace(/\s/g, '');  //преобразование строки в нижний регистр и замена пробельных символов
    alert(str === str.split('').reverse().join(''));
}