# "Javascript and Browser"

### Задание
#### 0. Создать landing page по макету, добавить форму обратной связи

Поля формы:
* Имя
* Фамилия
* Email
* Номер телефона
* Сообщение (textarea)
* Кнопка *Отправить*

Необходимо использовать input элемент, если не указано иное.

#### 1. На каждое поле добавить валидацию значений
Для валидации использовать JS (например, получать форму и устанавливать для элементов валидаторы, свойства)

Для шаблонов и масок использовать регулярные выражения.
* Имя - поле не должно быть пустым
* Фамилия - поле не должно быть пустым
* Email - поле не должно быть пустым, должно соответствовать шаблону email
* Номер телефона - поле может быть пустым, 
  но если оно не пустое то введенное значение должно соответствовать маске *+X(XXX)XX-XX-XXX*
* Сообщение - поле не должно быть пустым

Обязательные поля должны быть визаульно отмечены (с помощью CSS).

> Необходимо завести объект, в котором будут храниться введенные пользователем значения. Поля этого объекта необходимо связать с формой ввода.

Поля Email и Номер телефона должны отображать маску ввода (placeholder).

При нажатии на кнопку *Отправить* проверять валидность введенных данных, 
если введенные данные не валидны, отобразить диалоговое окно (alert) 
с текстом: **"Поля *<названия полей через запятую>* заполнены не верно, пожалуйста исправьте"**.

#### 2. Проекция в localStorage

При вводе данных в форму необходимо дублировать их в localStorage.
Если пользователь не нажал кнопку *Отправить* и закрыл страницу, 
то при последующем открытии страницы необходимо предзаполнить форму ранее введенными данными.

#### 3. Работа с cookies
При нажатии на кнопку *Отправить*, если все введенные данные валидны, необходимо:

* отобразить диалоговое окно (alert) с текстом **"*<Имя Фамилия>*, спасибо за обращение!"**
* в cookies записать флаг о том, что обращение отправлено и имя и фамилию пользователя.
* При нажатии на кнопку *Отправить* проверять флаг из cookies, если данные уже были отправлены, 
  то отобразить диалоговое окно (alert) с текстом: **"*<Имя Фамилия>*, ваше обращение обрабатывается!"**


#### Дополнительное задание
* При валидации данных заменить диалоговое окно на подсветку не правильно заполненных полей
* Добавить рядом с каждым не валидным полем user-friendly сообщение об ошибке, 
  если поле валидно, то сообщение не должно отображаться. 
  Лучше использовать возможности CSS и псевдоклассов/псевдоэлементов.
* Если какое-то из обязательных полей не заполено, кнопка *Отправить* должна быть отключена.
* Реализовать на js, html, css стилизованное диалоговое окно 
  (без использования сторонних библиотек, использовать его вместо alert).

#### Полезная информация
[Работа с полями ввода](https://learn.javascript.ru/events-change-input)  
[Регулярные выражения](https://learn.javascript.ru/regular-expressions)