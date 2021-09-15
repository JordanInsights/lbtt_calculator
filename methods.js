const taxBands = [
    {price: 750000, rate: 0.12},
    {price: 325000, rate: 0.10},
    {price: 250000, rate: 0.05},
    {price: 145000, rate: 0.02},
];

const calculateLbtt = (value) => {
    if (!value) {
        throw 'Missing parameters';
    }

    if (typeof(value) !== 'number') {
        throw 'Incorrect data type passed';
    }

    if (value < 145000) {
        return 0;
    }

    let totalTax = taxGenerator(value, 0, 0);
    return totalTax;
};

const calculateBandTax = (value, proportion) => {
    if (!value || !proportion) {
        throw 'Missing parameters';
    }

    if (typeof(value) !== 'number' || typeof(proportion) !== 'number') {
        throw 'Incorrect data type passed';
    }

    return value * proportion;
};

const taxGenerator = (value, iteration, cumulativeTax) => {
    if (iteration > 3) {
        return cumulativeTax;
    }

    const taxBand = taxBands[iteration];
    const nextIteration = iteration += 1;
    const { price, rate } = taxBand;
    let taxable = value - price;
    if (taxable <= 0) {
        return taxGenerator(value, nextIteration, cumulativeTax);
    } else {
        const taxInBracket = calculateBandTax(taxable, rate);
        const newCumulativeTax = cumulativeTax += taxInBracket;
        return taxGenerator(price, nextIteration, newCumulativeTax);
    }
}



module.exports = {
    calculateLbtt,
    calculateBandTax,
    taxGenerator
}