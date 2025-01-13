function monthlySavings(payments, livingCost) {
    if (!Array.isArray(payments) || typeof livingCost !== 'number') {
        return "invalid input";
    }

    let totalIncomeAfterTax = payments.reduce((total, payment) => {
        return total + (payment >= 3000 ? payment * 0.8 : payment);
    }, 0);

    let savings = totalIncomeAfterTax - livingCost;

    return savings >= 0 ? savings : "earn more";
}

module.exports = monthlySavings;
