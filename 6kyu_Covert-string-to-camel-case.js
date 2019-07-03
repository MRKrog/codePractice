// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
//
// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
//
// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

function toCamelCase(str){
  if(str.length < 1) return str
  let strSplit;
  if(str.includes('-')){
    strSplit = str.split('-')
  } else if(str.includes('_')){
    strSplit = str.split('_')
  }

  let strUpdate = strSplit.map((word, i) => {
    if(i === 0){
      return word
    }
    let updatedWord = ''
    for(let j = 0; j < word.length; j++){
      if(j == 0){
        updatedWord += word[j].toUpperCase()
      } else {
        updatedWord += word[j]
      }
    }
    return updatedWord
  })
  return strUpdate.join('')
}

toCamelCase("the-stealth-warrior")
// toCamelCase("the_stealth_warrior")

// Test.assertEquals(toCamelCase(''), '', "An empty string was provided but not returned")
// Test.assertEquals(toCamelCase("the_stealth_warrior"), "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
// Test.assertEquals(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
// Test.assertEquals(toCamelCase("A-B-C"), "ABC", "toCamelCase('A-B-C') did not return correct value")
