// Define a method that accepts 2 strings as parameters. The method returns the first string sorted by the second.
//
// sortString("foos", "of")       => "oofs"
//
// sortString("string", "gnirts") => "gnirts"
//
// sortString("banana", "abn")    => "aaabnn"
// To elaborate, the second string defines the ordering. It is possible that in the second string characters repeat, so you should remove repeating characters, leaving only the first occurrence.
//
// Any character in the first string that does not appear in the second string should be sorted to the end of the result in original order.


function sortString(string,ordering) {
  ordering = ordering.split('').filter((x, i, a) => a.indexOf(x) == i)
  let result = [];
  let notFound = '';
  for(let i = 0; i < ordering.length; i++){
    let found = string.split('').filter(val => {
      return val == ordering[i]
    })
    result.push(found)
  }

  let flatArr = [].concat(...result);

  for(let c of string){
    if(!flatArr.includes(c)){
      notFound += c
    }
  }

  return flatArr.join('') + notFound
}

sortString("foos", "of")

//
// describe("example tests",()=>{
//   it("sorts correctly",()=>{
//     assert.strictEqual(sortString("foos", "of"), "oofs");
//   });
//   it("sorts correctly",()=>{
//     assert.strictEqual(sortString("string", "gnirts"), "gnirts");
//   });
//   it("sorts word when ordering contains all matching characters",()=>{
//     assert.strictEqual(sortString("banana","abn"), "aaabnn");
//   });
// });
