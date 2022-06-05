// API ключ
let apiKey = "577b3bd2eec54e5a84a1ae825e746783";

// Город погода которого нужна
let city = "Moscow";

let search = document.getElementById('search').onclick = writeDownCity;

function writeDownCity() {
    //скрыть приветствие
    let el = document.querySelector('.greetings').hidden = true;

    //получение данных из input
    let cityName = document.querySelector('.entryField').value;
    city = cityName;

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&units=metric&appid=${apiKey}`)
        .then(function (resp) {return resp.json() })
        .then(function (data) {
            console.log(data);
            //название города
            document.querySelector('.current__city').textContent = data.name;
            //информация об облачности
            document.querySelector('.current__description').textContent = data.weather[0]['description'];
            //температура
            document.querySelector('.current__temperature').innerHTML = Math.round(data.main.temp) + '&deg;';
            //изображение
            document.querySelector('#img').setAttribute('src', `http://openweathermap.org/img/w/${data.weather[0].icon}.png`);
        })
        .catch(function () {
            //catch errors
            alert("City ​​name is not correct");
        });
}

 