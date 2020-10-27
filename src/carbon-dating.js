const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let elapsedTime = 0;

  if (sampleActivity > 0 
      & sampleActivity < 15
      & typeof(sampleActivity) === 'string') { 
    elapsedTime = Math.log(MODERN_ACTIVITY / sampleActivity) / 0.693 * HALF_LIFE_PERIOD;
    return Math.ceil(elapsedTime);
  }

  return false
};
