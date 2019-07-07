// You are given an array of integers. Your task is to sort odd numbers within the array in ascending order, and even numbers in descending order.
//
// Note that zero is an even number. If you have an empty array, you need to return it.
//
// For example:
//
// [5, 3, 2, 8, 1, 4]  -->  [1, 3, 8, 4, 5, 2]
//
// odd numbers ascending:   [1, 3,       5   ]
// even numbers descending: [      8, 4,    2]


function sortArray(array) {
  let odd = [];
  let even = []
  for(let c of array){
    if(c % 2 === 0){
      even.push(c)
    } else {
      odd.push(c)
    }
  }
  even.sort((a,b) => b - a)
  odd.sort((a,b) => a - b)

  let finalArr = array.map(val => {
    let removed;
    if(val % 2 === 0){
      removed = even.splice(0, 1);
    } else {
      removed = odd.splice(0, 1);
    }
    return removed
  })
  return finalArr = [].concat(...finalArr)
}


sortArray([5, 3, 2, 8, 1, 4, 11]) // [1, 3, 8, 4, 5, 2, 11]

// Test.assertSimilar(sortArray([5, 3, 2, 8, 1, 4, 11]), [1, 3, 8, 4, 5, 2, 11])
// Test.assertSimilar(sortArray([2, 22, 37, 11, 4, 1, 5, 0]), [22, 4, 1, 5, 2, 11, 37, 0])
// Test.assertSimilar(sortArray([1, 111, 11, 11, 2, 1, 5, 0]),[1, 1, 5, 11, 2, 11, 111, 0])
// Test.assertSimilar(sortArray([]),[])
