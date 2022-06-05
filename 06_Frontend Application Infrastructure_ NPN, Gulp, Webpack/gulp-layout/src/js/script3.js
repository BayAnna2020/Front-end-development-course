
document.querySelector('#sortByMaxButton').onclick = function () {
    let length = document.querySelector('#length').value,
        minValue = document.querySelector('#min').value,
        maxValue = document.querySelector('#max').value,
        array = [];
    for (let i = 0; i < length; i++) {
        array.push(getRandomInteger(minValue, maxValue));
    }

    bubbleSort(array);
    console.log(array);
    document.querySelector('#outAfter').innerHTML = array;
    return array;
}

function getRandomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

/*сортировка 1=====================*/
function bubbleSort(array) {
    console.log(array);
    document.querySelector('#outBefore').innerHTML = array;

    for (let n = 0; n < array.length; n++) {
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                const buff = array[i];
                array[i] = array[i + 1];
                array[i + 1] = buff;
            }
        }
    }
}


/*desc=================*/
document.querySelector('#sortByMinButton').onclick = function () {
    let length = document.querySelector('#length').value,
        minValue = document.querySelector('#min').value,
        maxValue = document.querySelector('#max').value,
        array = [];
    for (let i = 0; i < length; i++) {
        array.push(getRandomInteger(minValue, maxValue));
    }

    /*сортировка 2=====================*/
    bubbleSort(array);

    function bubbleSort(array) {
        console.log(array);
        document.querySelector('#outBefore').innerHTML = array;

        for (let n = 0; n < array.length - 1; n++) {
            for (let i = n + 1; i < array.length; i++) {
                if (array[n] < array[i]) {
                    const buffer = array[i];
                    array[i] = array[n];
                    array[n] = buffer;
                }
            }
        }
    }

    console.log(array);
    document.querySelector('#outAfter').innerHTML = array;
    return array;
}

/*sum =================*/
document.querySelector('#sumOfSquaresOfOddNumbersButton').onclick = function () {
    let length = document.querySelector('#length').value,
        minValue = document.querySelector('#min').value,
        maxValue = document.querySelector('#max').value,
        array = [];
    for (let i = 0; i < length; i++) {
        array.push(getRandomInteger(minValue , maxValue));
    }

    /* сумма квадратов всех нечетных элементов ===============*/

    let result = 0;
    sumSquares(array);

    function sumSquares(array) {
        console.log(array);
        document.querySelector('#outBefore').innerHTML = array;

        for (let i = 0; i < array.length; i++) {
            if (array[i] % 2 !== 0) {
                result += array[i] * array[i];
            }
        }
        console.log(array);
    }

    console.log(result);
    document.querySelector('#outAfter').innerHTML = result;
    return array;
}