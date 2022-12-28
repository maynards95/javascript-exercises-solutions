const fibonacci = function (number) {
    let a = 0;
    let b = 1;   
    while (number >= 0) {
        for (let i = 1; i < number; i++) {
            const temp = b;
            b = a + b;
            a = temp;
        }
        return b;
    }
    return 'OOPS';
};

// Do not edit below this line
module.exports = fibonacci;
