const CustomError = require("../extensions/custom-error");

const chainMaker = {
  result: [],
  getLength() {
    return this.result.length;
  },
  addLink(value = '( )') {
    this.result.push(value);
    return this;
  },
  removeLink(position) {
    if (!isNaN(position) 
      && position > 0 
      && position <= this.result.length) {
    this.result.splice(position - 1, 1);
    return this;
  } else {
    this.result = [];
    throw new Error();
  }
  },
  reverseChain() {
    this.result = this.result.reverse();
      return this;
  },
  finishChain() {
    let finishchain = "";
    this.result.forEach(el => finishchain += `( ${el} )~~`)
    this.result = [];
    return finishchain.slice(0, -2);
  },
};

module.exports = chainMaker;