let name = prompt('Как вас зовут?'),
    age,
    flag = true;

while (flag) {
    age = parseInt(prompt('Сколько вам лет?'));

    if (isNaN(age) || age <= 0) {
        alert('Введите корректный возраст');
    } else {
        alert('Привет, ' + name + ' , тебе уже ' + age + ' лет!');
        flag = false;
    }
}