module.exports = function toReadable (number) {
  const digitsName = ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const dozensName = ['ten','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const secondDozenName = ['ten','eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  
  function digitsOfNumber(num){
    const hundreds = Math.floor(num / 100);
    const dozens = Math.floor((num - hundreds * 100) / 10);
    const units = num - hundreds * 100 - dozens * 10;
    return [hundreds, dozens, units];
  }
  
  function threeDigitsNumToString(num){
    const digits = digitsOfNumber(num);

    let hundreds = '';
    let dozens = '';
    let units = '';

    if(digits[0] === 0 && digits[1] === 0 && digits[2] === 0){
        return digitsName[0];
    }

    if(digits[0] !== 0){
        hundreds = `${digitsName[digits[0]]} hundred `;
    }

    if(digits[1] !== 0){
        if(digits[1] === 1){
            return `${hundreds}${secondDozenName[digits[2]]}`
        } else {
            dozens = `${dozensName[digits[1] - 1]} `
        }
    }

    if(digits[2] !== 0){
        units = `${digitsName[digits[2]]}`
    }

    return (hundreds + dozens + units).trim();
  }

  return threeDigitsNumToString(number);
}
