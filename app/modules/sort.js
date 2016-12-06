'use strict';


const selectSort = (numbers) => {

    for (let i = 0; i < numbers.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[j] < numbers[minIndex]) {
                minIndex = j;
            }
        }
        let tmp = numbers[i];
        numbers[i] = numbers[minIndex];
        numbers[minIndex] = tmp;               
    }
}




module.exports = {
    selectSort
}