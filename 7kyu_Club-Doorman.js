// The Club Doorman will give you a word. To enter the Club you need to provide the right number according to provided the word.
//
// Every given word has a doubled letter, like 'tt' in lettuce.
//
// To answer the right number you need to find the doubled letter's position of the given word in the alphabet and multiply this number per 3.
//
// It will be given only words with one doubled letter.
//
//
// EXAMPLE
// Lettuce is the given word. 't' is the doubled letter and it's position is 20 in the alphabet.
//
// The answer to the Club Doorman is 20 * 3 = 60
//
//
// TASK
// The function passTheDoorMan with a given string word shall return the right number.


let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

function passTheDoorMan (word){
  let foundDouble = '';

  word.split('').forEach((letter, index) => {
    if(letter === word[index + 1]){
      foundDouble = letter
    }
  })

  let position = alphabet.findIndex(i => {
    return i === foundDouble
  })

  return (position + 1) * 3
}

passTheDoorMan("lettuce")

// describe("Club Doorman", function(){
//   it("Basic Tests", function(){
//    Test.assertSimilar( passTheDoorMan("lettuce") , 60);
//    Test.assertSimilar( passTheDoorMan("hill"), 36);
//    Test.assertSimilar( passTheDoorMan("apple"), 48);
//  });
// });
