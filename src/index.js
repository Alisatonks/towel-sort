
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let array = []
    let result
    if (matrix === undefined || matrix.length === 0) {return array}
    else {
        for (let i = 0; i< matrix.length; i=i+1) {
            if (i % 2 === 0) {
    array[i] = matrix[i]} 
    else {
    array[i] = matrix[i].sort((a, b) => b - a)}
    result = ((array.join(',')).replace(/,/gi, ', ')).split(', ')
        }
    }
        return result
    }
