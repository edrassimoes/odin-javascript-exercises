const fibonacci = function(value) {
    let fibonacci = [];
    const number = Number(value);

    if (number === 0) {
        return 0;
    }

    if (number < 0) {
        return 'OOPS';
    }

    for (let i = 0; i < number; i++) {
        if (i < 2) {
            fibonacci.push(1);
        } else {
            fibonacci.push(
                fibonacci[i-2] + fibonacci[i-1]
            );
        }
    }
    return fibonacci[number - 1];
};

// Do not edit below this line
module.exports = fibonacci;
