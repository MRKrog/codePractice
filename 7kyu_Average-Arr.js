// Create a function that takes a 2D array as an input, and outputs another array that contains the average values for the numbers in the nested arrays at the corresponding indexes.
//
// For Example:
//
// avgArray([[1, 2, 3, 4], [5, 6, 7, 8]]); // => [3, 4, 5, 6]
// avgArray([[2, 3, 9, 10, 7], [12, 6, 89, 45, 3], [9, 12, 56, 10, 34], [67, 23, 1, 88, 34]]); // => [22.5, 11, 38.75, 38.25, 19.5]
// This function should also work with negative numbers.


function avgArray(arr) {
  let averageArr= [];
  arr.forEach((val, i) => {
    for(let j = 0; j < val.length; j++){
      if(averageArr.length < val.length){
        averageArr.push(val[j])
      } else {
        averageArr[j] += val[j]
      }
    }
  })

  let finalArr = averageArr.map(val => {
    return val / arr.length
  })

  return finalArr;
}


avgArray([[2, 3, 9, 10, 7], [12, 6, 89, 45, 3], [9, 12, 56, 10, 34], [67, 23, 1, 88, 34]])

// avgArray([[1, 2, 3, 4], [5, 6, 7, 8]])



Test.describe('Your "avgArray" function', function () {
  Test.it('should work for the examples provided in the Description', function () {
    Test.assertDeepEquals(avgArray([[1, 2, 3, 4], [5, 6, 7, 8]]), [3, 4, 5, 6]);
    Test.assertDeepEquals(avgArray([[2, 3, 9, 10, 7], [12, 6, 89, 45, 3], [9, 12, 56, 10, 34], [67, 23, 1, 88, 34]]), [22.5, 11, 38.75, 38.25, 19.5]);
  });
});
