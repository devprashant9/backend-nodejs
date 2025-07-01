function difference(...number) {
    return number.reduce((acc, next) => acc - next, 0);
}

function product(...number) {
    return number.reduce((acc, next) => acc * next, 1);
}

module.exports = {
    difference,
    product,
};

