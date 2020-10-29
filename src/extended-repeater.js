const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, 
  {
    repeatTimes: strRep, 
    separator: strSep, 
    addition: add, 
    additionRepeatTimes: addRep, 
    additionSeparator: addSep 
  }
  ) {

  if (add === undefined) add = ''
  result = gen(add, addRep || 1, addSep || '|')
  return gen(str, strRep || 1, strSep || '+', result)
};
  
function gen(str, max, separator1, separator2 = '') {
  let result = ''
  for (let i = 0; i < max; i++) {
    if (i === max - 1) separator1 = ''
    result += `${str}${separator2}${separator1}`
  }
  return result
}
