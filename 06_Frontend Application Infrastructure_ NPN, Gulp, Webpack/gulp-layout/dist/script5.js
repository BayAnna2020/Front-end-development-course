function checkStringAsPalindrome(e){e=e.toLowerCase().replace(/\s/g,""),alert(e===e.split("").reverse().join(""))}checkStringAsPalindrome(prompt("Введите слово для проверки на палиндром"));