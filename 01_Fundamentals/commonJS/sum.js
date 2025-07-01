function sum(...number) {
    return number.reduce((acc, next) => acc + next, 0);
}

module.exports = sum;

