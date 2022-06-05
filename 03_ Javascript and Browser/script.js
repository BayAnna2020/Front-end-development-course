let form = document.querySelector('.formWithValidation');
let fields = form.querySelectorAll('.field');
let messageCounter = 0;

//заполнение и отправка формы в массив
const arr = [];

function retrieveFormValue(event) {
    event.preventDefault();

    const formData = new FormData(form);
    const values = Object.fromEntries(formData.entries());

    arr.push(values);

    console.log(arr);
    console.log('Данные из формы:', values);
}

//проверка, что поля не пустые
let generateError = function (text) {
    let error = document.createElement('div');
    error.className = 'error';
    error.style.color = '#656462';
    error.innerHTML = text;

    return error;
}

let variableToTestForTrue;
//пишет об ошибке над каждым полем
let checkFieldsPresence = function () {
    variableToTestForTrue = true;
    //очистка старых полей
    let errors = form.querySelectorAll('.error');
    for (let i = 0; i < errors.length; i++) {
        errors[i].remove();
    }

    //добавление сообщения об ошибке
    for (let i = 0; i < fields.length; i++) {
        if (!fields[i].value) {
            variableToTestForTrue = false;
            console.log('field is blank', fields[i]);
            let error = generateError('*Поле обязательно для заполнения');
            form[i].parentElement.insertBefore(error, fields[i]);
        }
    }
    return variableToTestForTrue;
}

//localStorage
names.value = localStorage.getItem('names');
names.oninput = () => {
    localStorage.setItem('names', names.value)
};

surname.value = localStorage.getItem('surname');
surname.oninput = () => {
    localStorage.setItem('surname', surname.value)
};

email.value = localStorage.getItem('email');
email.oninput = () => {
    localStorage.setItem('email', email.value)
};

phone.value = localStorage.getItem('phone');
phone.oninput = () => {
    localStorage.setItem('phone', phone.value)
};

question.value = localStorage.getItem('question');
question.oninput = () => {
    localStorage.setItem('question', question.value)
};

//alert об ошибке валидации
let variableMessageSent;

function validationErrorMessage() {
    variableMessageSent = false;

    //проверка электронной почты на валидацию
    const regexpMail = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    const myMail = document.getElementById('email').value;
    const validMail = regexpMail.test(myMail);

    //проверка номера телефона на валидацию
    const regexpPhone = /(\+7)[- _]*\(?[- _]*(\d{3}[- _]*\)?([- _]*\d){7}|\d\d[- _]*\d\d[- _]*\)?([- _]*\d){6})/g;
    const myPhone = document.getElementById('phone').value;
    const validPhone = regexpPhone.test(myPhone);

    //проверка, что поле телефона пустое
    let checkFieldPresencePhone = function () {
        let telephone = form.querySelectorAll('.telephone');
        let button = form.querySelectorAll('.send');

        for (let i = 0; i < telephone.length; i++) {
            if (!telephone[i].value) {
                return false;
            }
        }
        return true;
    }

    //Запись куки
    let nameCookie = document.cookie = localStorage.getItem('names');
    let surNameCookie = document.cookie = localStorage.getItem('surname');

    //условие проверки на валидацию
    if (!validMail && !validPhone && checkFieldPresencePhone()) {
        alert('Email и номер телефона заполнены не верно, пожалуйста исправьте');
        variableMessageSent = false;
        return false;
    } else {

        if (!validMail) {
            alert('Email заполнен не верно, пожалуйста исправьте');
            variableMessageSent = false;
            return false;
        } else if (!validPhone && checkFieldPresencePhone()) {
            alert('Номер телефона заполнен не верно, пожалуйста исправьте');
            variableMessageSent = false;
            return false;
        }
    }
    if (messageCounter <= 0) {
        if (validMail && validPhone && checkFieldPresencePhone() && (variableToTestForTrue === true)) {
            alert(nameCookie + " " + surNameCookie + ", спасибо за обращение!");
            messageCounter++;
            console.log(messageCounter);
            variableMessageSent = true;
            return true;
        } else if (validMail && !checkFieldPresencePhone() && (variableToTestForTrue === true)) {
            alert(nameCookie + " " + surNameCookie + ", спасибо за обращение!");
            variableMessageSent = true;
            messageCounter++;
            console.log(messageCounter);
            return true;
        }
        return variableMessageSent;
    } else {
        if (validMail && validPhone && checkFieldPresencePhone() && (variableToTestForTrue === true)) {
            this.alert(nameCookie + " " + surNameCookie + ", ваше сообщение обрабатывается!");
        } else if (validMail && !checkFieldPresencePhone() && (variableToTestForTrue === true)) {
            alert(nameCookie + " " + surNameCookie + ", ваше сообщение обрабатывается!");
        }
    }
}

//результат после нажатия кнопки Отправить
form.addEventListener('submit', function (event) {
    event.preventDefault();
    checkFieldsPresence();
    retrieveFormValue(event);
    validationErrorMessage();
})

