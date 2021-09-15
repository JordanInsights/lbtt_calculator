const {
    calculateLbtt,
    taxGenerator
} = require('./methods');

const inputValue = 900000;
const result = calculateLbtt(inputValue);

console.log(result);
