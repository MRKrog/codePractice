// You are given an odd-length array of integers, in which all of them are the same, except for one single number.
//
// Complete the method which accepts such an array, and returns that single different number.
//
// The input array will always be valid! (odd-length >= 3)
//
// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3


function stray(numbers) {
  let strayNumber;

  let strayObject = numbers.reduce((acc, val) => {
    if(!acc[val]){
      acc[val] = 1
    } else {
      acc[val]++
    }
    return acc
  }, {})

  Object.keys(strayObject).forEach(val => {
    if(strayObject[val] === 1){
      console.log(val)
      strayNumber = val
    }
  })
  return parseInt(strayNumber);
}

stray([17, 17, 3, 17, 17, 17, 17] )
