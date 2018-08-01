import Big from "big.js";

function isNumber(number) {
  return /[0-9]+/.test(number);
}

function operate(numberOne, numberTwo, operation) {
  const one = Big(numberOne || '0')
  const two = Big(numberTwo || '0')

  if (operation === '+') {
    return one.plus(two).toString();
  }
  if (operation === '-') {
    return one.minus(two).toString();
  }
  if (operation === '*') {
    return one.times(two).toString();
  }
  if (operation === '/') {
    return one.div(two).toString();
  }
  throw Error(`Unknown operation '${operation}'`);
}

function calculation(obj, buttonName) {
  if(isNumber(buttonName)) {
    if(obj.operation === '') {
      return {
        total: obj.total + buttonName
      }
    }
    return {
      next: obj.next + buttonName
    }
  }

  if(buttonName === 'clear') {
    return {
      next: '',
      operation: '',
      total: '',
    }
  }

  if(buttonName === '/' || buttonName === '-' || buttonName === '+' || buttonName === '*') {
    return {
      operation: buttonName
    }
  }

  if (obj.operation !== '') {
    if(buttonName === '=') {
      return {
        total: operate(obj.total, obj.next, obj.operation),
        operation: '',
        next: ''
      }
    }
  }
}

export default calculation;