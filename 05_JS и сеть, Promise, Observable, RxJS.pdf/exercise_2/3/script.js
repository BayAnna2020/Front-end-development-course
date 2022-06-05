let form = document.querySelector('.formWithValidation');
let fields = form.querySelectorAll('.field');
let messageCounter = 0;

//заполнение и отправка формы в массив

function retrieveFormValue(event) {
    event.preventDefault();

    const yourName = form.querySelector('[name="yourName"]'),
        yourSurname = form.querySelector('[name="yourSurname"]'),
        yourEmail = form.querySelector('[name="yourEmail"]'),
        yourPhone = form.querySelector('[name="yourPhone"]'),
        yourQuestion = form.querySelector('[name="yourQuestion"]');

    const values = {
        yourName: yourName.value,
        yourSurname: yourSurname.value,
        yourEmail: yourEmail.value,
        yourPhone: yourPhone.value,
        yourQuestion: yourQuestion.value,
    };

    console.log('Данные из формы: ', values);
}

form.addEventListener('submit', retrieveFormValue);

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

const names = document.getElementById('names');
names.value = localStorage.getItem('names');
names.oninput = () => {
    localStorage.setItem('names', names.value)
};

const surname = document.getElementById('surname');
surname.value = localStorage.getItem('surname');
surname.oninput = () => {
    localStorage.setItem('surname', surname.value)
};

const email = document.getElementById('email');
email.value = localStorage.getItem('email');
email.oninput = () => {
    localStorage.setItem('email', email.value)
};

const phone = document.getElementById('phone');
phone.value = localStorage.getItem('phone');
phone.oninput = () => {
    localStorage.setItem('phone', phone.value)
};

const question = document.getElementById('question');
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
    const emailValid = form.querySelector('.emailValid').value;
    const validMail = regexpMail.test(emailValid);

    //проверка номера телефона на валидацию
    const regexpPhone = /(\+7)[- _]*\(?[- _]*(\d{3}[- _]*\)?([- _]*\d){7}|\d\d[- _]*\d\d[- _]*\)?([- _]*\d){6})/g;
    const phoneValid = form.querySelector('.phoneValid').value;
    const validPhone = regexpPhone.test(phoneValid);

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

    //Для записи cookie
    let nameCookie = document.cookie = `user_first_name=${localStorage.getItem('names')}`;
    let surnameCookie = document.cookie = `user_first_name=${localStorage.getItem('surname')}`; 
    
    let flagCookie;

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
    //если все условия выполнены, запись cookie и вывод сообщений
    if (messageCounter <= 0) {
        if (validMail && validPhone && checkFieldPresencePhone() && (variableToTestForTrue === true)) {
            document.cookie = `flag=true`;
            alert(nameCookie + surnameCookie + ", спасибо за обращение!");
            messageCounter++;
            console.log(messageCounter);
            variableMessageSent = true;
            return true;
        } else if (validMail && !checkFieldPresencePhone() && (variableToTestForTrue === true)) {
            document.cookie = `flag=true`;
            alert(nameCookie + surnameCookie + ", спасибо за обращение!");
            variableMessageSent = true;
            messageCounter++;
            console.log(messageCounter);
            return true;
        }
        return variableMessageSent;
    } else {
        //сообщение при повторной отправке формы
        if (validMail && validPhone && checkFieldPresencePhone() && (variableToTestForTrue === true)) {
            this.alert(nameCookie + surnameCookie + ", ваше сообщение обрабатывается!");
        } else if (validMail && !checkFieldPresencePhone() && (variableToTestForTrue === true)) {
            alert(nameCookie + surnameCookie + ", ваше сообщение обрабатывается!");
        }
    }
}

//результат после нажатия кнопки Отправить
form.addEventListener('submit', function (event) {
    event.preventDefault();
    checkFieldsPresence();
    validationErrorMessage();
})

