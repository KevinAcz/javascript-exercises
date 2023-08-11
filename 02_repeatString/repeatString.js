const repeatString = function(word, times) {
    // if (times === 0) {
    //     return '';
    // }
    if (times < 0) {
        return 'ERROR';
    }
    // if (word === '') {
    //     return '';
    // }
    let result = word;
    for (let i = 1; i < times; i++ ) {
        result += word;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
