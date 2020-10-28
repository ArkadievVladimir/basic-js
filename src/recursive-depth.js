const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  calculateDepth(arr, depth = 1, acc = [1]) {
    arr.forEach(el => {
      if (Array.isArray(el)) {
        acc.push(depth + 1)
        this.calculateDepth(el, depth + 1, acc)
      }
    })
    return acc.sort((a, b) => b - a)[0]
  }
  
}