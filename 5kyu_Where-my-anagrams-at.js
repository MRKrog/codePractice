// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:
//
// 'abba' & 'baab' == true
//
// 'abba' & 'bbaa' == true
//
// 'abba' & 'abbba' == false
//
// 'abba' & 'abca' == false
// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:
//
// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
//
// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
//
// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []


function anagrams(word, arr){
  let results = arr.filter((currWord, index) => {
      let testArr = word.split('');
      let currArr = currWord.split('')
      if(testArr.length == currArr.length){
        for(let i = 0; i < currArr.length; i++){
          let currChar = currArr[i];
          if(testArr.includes(currChar)){
            let currIndex = testArr.indexOf(currChar)
            testArr.splice(currIndex, 1)
          }
        }
        if(testArr.length == 0){
          return currWord
        }
      }
  })
  return results
}

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])
// => ['aabb', 'bbaa']

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])
//=> ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer'])
//=> []
