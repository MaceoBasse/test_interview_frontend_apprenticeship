// Returns an array of even numbers

function getEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
}

module.exports = getEvenNumbers;