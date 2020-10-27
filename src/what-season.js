const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  
  if (date === undefined) return 'Unable to determine the time of year!';
  if (isNaN(date)) throw new Error();

  if (date.getMonth() < 2 
   || date.getMonth() === 11) return 'winter';
  if (date.getMonth() < 5) return 'spring';
  if (date.getMonth() < 8) return 'summer';
  if (date.getMonth() < 11) return 'autumn';

};
