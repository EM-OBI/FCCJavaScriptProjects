function rot13(str) {
    const regex = /[A-Z]/
      let newStr = str.split('')
    // console.log(newStr)
    let mappedStr = newStr.map((item) => {
      
      if (regex.test(item)) {
        // console.log(item.charCodeAt() + 13)
        return item.charCodeAt() + 13
      } else {
        console.log(item)
        return item
      }  
    })
    let mappedArr = mappedStr.map((item) => {
      if (item > 90) {
        return (item - 90) + 64
      } else {
        return item
      }
    })
    console.log(mappedArr)
    let result = ''
      for (const code of mappedArr) {
        if (!regex.test(String.fromCharCode(code))){
          result += code
        } else {
          result+= String.fromCharCode(code)
        }
      }
    console.log(result)
    return result;
  }
  
  rot13("SERR PBQR PNZC");