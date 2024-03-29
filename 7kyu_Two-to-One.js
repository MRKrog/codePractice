// Take 2 strings s1 and s2 including only letters from ato z.
// Return a new sorted string, the longest possible, containing distinct letters,

//
// each taken only once - coming from s1 or s2.
// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
//
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"


function longest(s1, s2) {
  let combinedString = [s1, s2].join('')
  let splitArr = splitObj(combinedString)
  return createWord(splitArr).join('')
}

function splitObj(word){
  let splitWord = word.split('').sort()
  return splitWord.reduce((acc, letter) => {
    acc[letter] = 1
    return acc
  }, {})
}

function createWord(word){
  return Object.keys(word).map(letter => {
    return letter
  })
}

longest("aretheyhere", "yestheyarehere")

// aehrsty

Test.describe("longest",function() {
Test.it("Basic tests",function() {
    Test.assertEquals(longest("aretheyhere", "yestheyarehere"), "aehrsty")
    Test.assertEquals(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu")
    Test.assertEquals(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy")
})})
