// You've been collecting change all day, and it's starting to pile up in your pocket, but you're too lazy to see how much you've found.
//
// Good thing you can code!
//
// Create change_count() to return a dollar amount of how much change you have!
//
// Valid types of change include:
//
// penny: 0.01
// nickel: 0.05
// dime: 0.10
// quarter: 0.25
// dollar: 1.00
// These amounts are already preloaded as floats into the CHANGE dictionary for you to use!
//
// You should return the total in the format $x.xx.
//
// Examples:
//
// changeCount('nickel penny dime dollar') == '$1.16'
// changeCount('dollar dollar quarter dime dime') == '$2.45'
// changeCount('penny') == '$0.01'
// changeCount('dime') == '$0.10'
// Warning, some change may amount to over $10.00!


// Remember you have a CHANGE dictionary to work with ;)

function changeCount(change){
  let changeSplit = change.split(' ')

  let changeTotal = changeSplit.reduce((acc, amount) => {
    let conversion = changeConversion(amount)
    acc += conversion
    return acc;
  }, 0)

  return `$${changeTotal.toFixed(2)}`
}

const changeConversion = (amount) => {
    let changeAmount = 0;
    switch(amount){
      case 'dollar':
        changeAmount = 1.00;
        break;
      case 'quarter':
        changeAmount = 0.25;
        break;
      case 'dime':
        changeAmount = 0.10;
        break;
      case 'nickel':
        changeAmount = 0.05;
        break;
      case 'penny':
        changeAmount = 0.01;
        break;
      default:
        changeAmount = 0;
        break;
    }
    return changeAmount;
}

changeCount('dime penny dollar') // >> $1.11



Test.assertEquals(changeCount('dime penny dollar'), '$1.11')
Test.assertEquals(changeCount('dime penny nickel'), '$0.16')
Test.assertEquals(changeCount('quarter quarter'), '$0.50')
Test.assertEquals(changeCount('dollar penny dollar'), '$2.01')
Test.assertEquals(changeCount('dollar dollar dollar dollar dollar dollar dollar dollar dollar dollar penny'), '$10.01')
