const sumAll = function(start, end) {
    let numbers = [];
    let result = 0;

    if (Number.isNaN(start) || Number.isNaN(end)) {
        return "ERROR"
    }

    if (!Number.isInteger(start) || !Number.isInteger(end)) {
        return "ERROR"
    }

    if (start < 0 || end < 0) {
        return 'ERROR'
    }

    if (start > end) {
        [start, end] = [end, start];
    }

    for (let i = start; i < end + 1; i++) {
        numbers.push(i)
    }

    for (let i = 0; i < numbers.length; i++) {
        result = result + numbers[i];
    }

    return result;

};

// Do not edit below this line
module.exports = sumAll;
