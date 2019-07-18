function jumpingNumber(n){
  let nArr = n.toString().split('')
  if(nArr.length === 1) return "Jumping!!"
  let jumping = false;
  console.log(nArr)

  for(let i = 0; i < nArr.length - 1; i++){
    let currNum = nArr[i]
    let nextNum = nArr[i + 1]

    if(parseInt(currNum) == parseInt(nextNum) + 1 || parseInt(currNum) == parseInt(nextNum) - 1){
      jumping = true;
    } else {
      return "Not!!"
    }
  }

  if(jumping){
    return "Jumping!!"
  } else {
    return "Not!!"
  }
}

// jumpingNumber(1)
// jumpingNumber(23)
jumpingNumber(8987)

// describe("Basic tests",_=>{
//   Test.assertEquals(jumpingNumber(1), "Jumping!!");
//   Test.assertEquals(jumpingNumber(7), "Jumping!!");
//   Test.assertEquals(jumpingNumber(9), "Jumping!!");
//   Test.assertEquals(jumpingNumber(23), "Jumping!!");
//   Test.assertEquals(jumpingNumber(32), "Jumping!!");
//   Test.assertEquals(jumpingNumber(79), "Not!!");
//   Test.assertEquals(jumpingNumber(98), "Jumping!!");
//   Test.assertEquals(jumpingNumber(8987), "Jumping!!");
//   Test.assertEquals(jumpingNumber(4343456), "Jumping!!");
//   Test.assertEquals(jumpingNumber(98789876), "Jumping!!");
// });
