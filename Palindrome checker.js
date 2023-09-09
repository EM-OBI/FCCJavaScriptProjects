function palindrome(str) {
    let removeSpecial = str.replace(/[^a-zA-Z0-9]/gi, '')
    removeSpecial = removeSpecial.toLowerCase()
    let reverseStr = ''
    for(let i = removeSpecial.length - 1; i >=0 ; i--){
      reverseStr += removeSpecial[i]
    }
  
    if (reverseStr === removeSpecial){
      console.log(`${reverseStr} and ${removeSpecial} are palindromes`)  
      return true
    } else {
        console.log(`${reverseStr} and ${removeSpecial} are NOT palindromes`)
        return false
    }
  }
palindrome('nurses run')
