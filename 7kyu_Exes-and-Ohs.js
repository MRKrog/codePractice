// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
//
// Examples input/output:
//
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false



function XO(str) {
  console.log(str)
  let xoObj = str.split('').reduce((acc, val) => {
    if(!acc[val]){
      acc[val] = 1
    } else {
      acc[val]++
    }
    return acc
  }, {})
  if(xoObj['x'] == xoObj['o']){
    return true
  }
  if(!xoObj['x'] && !xoObj['o']){
    return true
  }

  if(xoObj['x'] == (xoObj['O'] + xoObj['o'])) {
    return true
  }
  return false
}


Test.assertEquals(XO('xo'),true);
Test.assertEquals(XO("xxOo"),true);
Test.assertEquals(XO("xxxm"),false);
Test.assertEquals(XO("Oo"),false);
Test.assertEquals(XO("ooom"),false);
