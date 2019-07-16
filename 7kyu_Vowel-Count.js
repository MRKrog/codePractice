// Return the number (count) of vowels in the given string.
//
// We will consider a, e, i, o, and u as vowels for this Kata.
//
// The input string will only consist of lower case letters and/or spaces.


function getCount(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u']
  var vowelsCount = str.split('').reduce((acc, val) => {
    if(vowels.includes(val.toLowerCase())){
      acc++
    }
    return acc
  }, 0);

  return vowelsCount;
}


describe("Case 1", function(){
    it ("should be defined", function(){
        Test.assertEquals(getCount("abracadabra"), 5)
    });
});
