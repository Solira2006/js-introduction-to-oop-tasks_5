// BEGIN
export default function Money(amount, code = 'usd') {
  this.value = amount;
  this.currency = code;
}

Money.prototype.getValue = function() {
  return this.value;
};

Money.prototype.getCurrency = function() {
  return this.currency;
};

Money.prototype.exchangeTo = function(targetCurrency) {
  if (this.currency === targetCurrency) {
    return new Money(this.value, targetCurrency);
  }
  
  if (this.currency === 'usd' && targetCurrency === 'eur') {
    return new Money(this.value * 0.7, targetCurrency);
  }
  
  if (this.currency === 'eur' && targetCurrency === 'usd') {
    return new Money(this.value * 1.2, targetCurrency);
  }
  
  return new Money(this.value, targetCurrency);
};

Money.prototype.add = function(anotherMoney) {
  let incomingAmount = anotherMoney.getValue();
  const incomingCode = anotherMoney.getCurrency();
  
  if (this.currency !== incomingCode) {
    const converted = anotherMoney.exchangeTo(this.currency);
    incomingAmount = converted.getValue();
  }
  
  return new Money(this.value + incomingAmount, this.currency);
};

Money.prototype.format = function() {
  const symbolMap = {
    usd: 'USD',
    eur: 'EUR'
  };
  
  return this.value.toLocaleString(undefined, {
    style: 'currency',
    currency: symbolMap[this.currency]
  });
};
// END