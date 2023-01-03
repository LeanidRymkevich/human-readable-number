module.exports = function toReadable (number) {

    const digitsName = ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const dozensName = ['ten','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const secondDozenName = ['ten','eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    
    // a solution for 3-digit numbers

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
  
    // a solution for 12-digit numbers

    function digitsOfBigNumber(num){
      const billions = Math.floor(num / 1e9);
      const millions = Math.floor( (num - billions * 1e9) / 1e6);
      const thousands = Math.floor((num - billions * 1e9 - millions * 1e6) / 1e3);
      const rest = num - billions * 1e9 - millions * 1e6 - thousands * 1e3;
      return [billions, millions, thousands, rest];
    }    
  
    const numbers = digitsOfBigNumber(number);
    let result = '';
    
    if(numbers[0] !== 0){
      result += `${threeDigitsNumToString(numbers[0])} billion `; 
    }
  
    if(numbers[1] !== 0){
      result += `${threeDigitsNumToString(numbers[1])} million `;
    }
  
    if(numbers[2] !== 0){
      result += `${threeDigitsNumToString(numbers[2])} thousand `;
    }
  
    if(numbers[3] !== 0){
      result += `${threeDigitsNumToString(numbers[3])}`;
    }
  
    if(numbers[0] === 0 && numbers[1] === 0 && numbers[2] === 0 && numbers[3] === 0){
      result = 'zero';
    }
  
    return result.trim();
}
