
// You need to write a function, that returns the first non-repeated character in the given string.
//
// For example for string "test" function should return 'e'.
// For string "teeter" function should return 'r'.
//
// If a string contains all unique characters, then return just the first character of the string.
// Example: for input "trend" function should return 't'
//
// You can assume, that the input string has always non-zero length.
//



function firstNonRepeated(word){
  let charArr = {}
  let singleChars = []

  for(let c of word){
    if(charArr[c]){
      charArr[c]++
    } else {
      charArr[c] = 1
      singleChars.push(c)
    }
  }

  let foundChar = singleChars.find(c => {
    if(charArr[c] === 1){
      return c
    }
  })
  return foundChar
}

firstNonRepeated('1122321235121222')
firstNonRepeated('test')
firstNonRepeated('teeter')
