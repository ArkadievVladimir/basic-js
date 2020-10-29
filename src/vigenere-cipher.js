const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(type = true) {
    return this.type = type
  }
  
  encrypt(message, key) {
    let result = [],
    shift;
    if (message === undefined || key === undefined) throw new Error()
    message = message.toUpperCase()
    key = key.toUpperCase()
    while (message.length > key.length) key += key
    message.split('').map((el, i) => {
      if (/[A-Z]/.test(el)) {
        shift = el.charCodeAt(0) + key.charCodeAt(i) - 65
        if (shift > 90) shift -= 26
        result.push(String.fromCharCode(shift))
      } else {
        result.push(el)
        key = `-${key}`
      }
    })
    return this.type ? result.join('') : result.reverse().join('')
  }    

  decrypt(message, key) {
    let result = [],
    shift;
    if (message === undefined || key === undefined) throw new Error()
    message = message.toUpperCase()
    key = key.toUpperCase()
    while (message.length > key.length) key += key
    message.split('').map((el, i) => {
      if (/[A-Z]/.test(el)) {
        shift = 65 + el.charCodeAt(0) - key.charCodeAt(i)
        if (shift < 65) shift += 26
        result.push(String.fromCharCode(shift))
      } else {
        result.push(el)
        key = `-${key}`
      }
    })
    return this.type ? result.join('') : result.reverse().join('')
  }
}

module.exports = VigenereCipheringMachine;