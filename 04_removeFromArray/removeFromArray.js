const removeFromArray = function(array, ...elementstoDelete) {

    const deleteElement = (element) => {
        for (let i = 0; i< array.length; i++) {
            if (array[i] === element) {
                array.splice(i,1);
                i--;
            }
        }
    }
    for (const element of elementstoDelete) {
        deleteElement(element);
    }
    return array;
}

// Do not edit below this line
module.exports = removeFromArray;
