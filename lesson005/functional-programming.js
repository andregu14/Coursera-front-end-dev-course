var currencyOne = 100
var currencyTwo = 0
var exchangeRate = 1.2

function convertCurrency(amount, rate) {
    return amount * rate
}

currencyTwo = convertCurrency(currencyOne, exchangeRate)

console.log(currencyTwo);

/** 
 * 
 * 
*/

function doubleIt(num) {
    return num * 2
}

function objectMaker(val) {
    return {
        prop: val
    }
}

objectMaker(20) // {prop: 20}
doubleIt(10).toString() // "20"
objectMaker( doubleIt(100) ) // {prop: 200}

// Being able to return custom values is one of the foundations that makes functional programming possible.