let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromEuroToDollar(euroAmount, exchangeRate) {

  if (typeof euroAmount !== 'number' || typeof exchangeRate !== 'number') {
    console.error("Invalid input: Both euroAmount and exchangeRate must be numbers.");
    return null;
  }

  if (exchangeRate <= 0) {
    console.error("Invalid exchange rate: Exchange rate must be greater than zero.");
    return null; 
  }

  const usdAmount = euroAmount * exchangeRate;
  return usdAmount;
}

console.log(fromEuroToDollar(3.5,1.07))


function fromDollarToYen(dollarAmount, exchangeRate) {

  if (typeof dollarAmount !== 'number' || typeof exchangeRate !== 'number') {
    console.error("Invalid input: Both euroAmount and exchangeRate must be numbers.");
    return null;
  }

  if (exchangeRate <= 0) {
    console.error("Invalid exchange rate: Exchange rate must be greater than zero.");
    return null; 
  }

  const yenAmount = dollarAmount * exchangeRate;
  return yenAmount;
}

console.log(fromDollarToYen(3.5, 147.72));



function fromYenToPound(yenAmount, exchangeRate) {

  if (typeof yenAmount !== 'number' || typeof exchangeRate !== 'number') {
    console.error("Invalid input: Both euroAmount and exchangeRate must be numbers.");
    return null;
  }

  if (exchangeRate <= 0) {
    console.error("Invalid exchange rate: Exchange rate must be greater than zero.");
    return null; 
  }

  const poundAmount = yenAmount * exchangeRate;
  return poundAmount;
}

console.log(fromYenToPound(600, .0050))

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };
