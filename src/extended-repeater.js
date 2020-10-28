const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let result = '',
  strRep = options.repeatTimes,
  strSep = options.separator,
  add = options.addition,
  addRep = options.additionRepeatTimes,
  addSep = options.additionSeparator;
  
  if (strRep === undefined || strRep === 0) strRep = 1
  if (addRep === undefined || addRep === 0) addRep = 1
  if (strSep === undefined) strSep = '+'
  if (addSep === undefined) addSep = '|'
  if    (add === undefined) add = ''

  result = gen(add, addRep, addSep)
  return gen(str, strRep, strSep, result)
};
  
function gen(str, max, separator1, separator2 = '') {
  let result = ''
  for (let i = 0; i < max; i++) {
    if (i === max - 1) separator1 = ''
    result += `${str}${separator2}${separator1}`
  }
  return result
}