const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let result = [];

  arr.forEach((elem, index, array) => {

    if ((elem === '--double-next') 
    && (typeof(array[index + 1]) !== 'undefined')) return result.push(array[index + 1])

    if ((elem === '--double-prev')
    && (typeof(array[index - 1]) !== 'undefined')
    && (array[index - 2] !== '--discard-next')) return result.push(array[index - 1])
    
    if ((array[index - 1] !== '--discard-next') 
     && (array[index + 1] !== '--discard-prev')
     && (elem !== '--double-next') 
     && (elem !== '--double-prev')
     && (elem !== '--discard-next')
     && (elem !== '--discard-prev')) return result.push(elem)
  
  });

  return result

};
