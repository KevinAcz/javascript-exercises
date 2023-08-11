const sumAll = function(min,max) {
    let sum = 0;

    if (min > max) {
        [min,max] = [max,min];
    }
    if (min < 0 || max < 0) {
        return 'ERROR';
    }
    else if (typeof min !== 'number' || typeof max !== 'number') {
        return 'ERROR';
    }

    for (let num = min; num<=max; num++) {
        sum += num;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
