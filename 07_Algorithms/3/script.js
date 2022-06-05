const array = Array(20).fill(null).map(() => getRandomBetween(0, 100));
const sorted = quicksort(array);

console.log(array);
console.log(sorted);

function getRandomBetween(min, max) {
    return min = Math.floor(Math.random() * (max - min + 1));
}

function quicksort(array) {
    if(array.length < 2) {
        return array;
    }

    const index = Math.floor(Math.random() * array.length);
    const currentItem = array[index];

    const more = [];
    const less = [];

    for (let i = 0; i < array.length; i++) {
        if(i === index) {
            continue
        }

        if (array[i] > currentItem) {
            more.push(array[i]);
        }
        else {
            less.push(array[i]);
        }
    }

    return [
       ...quicksort(less),
        currentItem,
       ...quicksort(more)
    ]
}