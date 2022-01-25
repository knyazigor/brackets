
module.exports = function check(str, bracketsConfig) {
  for (let k = str.length; k >= 0; k--) {

    for(let j = 0; j < bracketsConfig.length; j++) {

      if(str[k] === bracketsConfig[j][0]) {
        str = str.replace(bracketsConfig[j].join(''),'')
      }

    }

  }

  return str === ""
}

