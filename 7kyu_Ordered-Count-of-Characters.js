// Count the number of occurrences of each character and return it as a list of tuples in order of appearance.
//
// Example:
//
// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

var orderedCount = function (text) {
  let finalArr = []
  let textArr = text.split('')

  let checkArr = textArr.reduce((acc, letter) => {
    if(!acc.includes(letter)){
      acc.push(letter)
    }
    return acc
  }, [])

  checkArr.forEach(letter => {
    let number = findNumber(letter)
    finalArr.push([letter, number])
  })

  function findNumber(letter){
    return letterCount = textArr.filter(i => {
      return i == letter
    }).length
  }

  return finalArr
}

// orderedCount('abracadabra')
orderedCount('49256233539841620764680431485051666670274903')

const examples = [
    ["abracadabra", [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]],
    ["Code Wars",  [['C', 1], ['o', 1], ['d', 1], ['e', 1], [' ', 1], ['W', 1], ['a', 1], ['r', 1], ['s', 1]]],
    ["212", [['2', 2], ['1', 1 ]]],
];
