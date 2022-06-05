let array = [];
for (let i = 1; i <= 100; i++) {
    array.push(i);
}
console.log(array);

fizzBuzz(array);

function fizzBuzz(array) {

    for (let i = 0; i < array.length; i++) {

        if (array[i] % 15 === 0) {
            console.log("FizzBuzz");
        } else if (array[i] % 3 === 0) {
            console.log("Fizz");
        } else if (array[i] % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(array[i]);
        }
    }
}