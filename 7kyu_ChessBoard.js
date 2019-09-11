function chessBoard(rows, columns) {
  let chessArr = [];

  for(let i = 0; i < rows; i++){
    if(i % 2 === 0){
      chessArr.push([])
      let curRow = chessArr[i]
      for(let j = 0; j < columns; j++){
        if(j % 2 === 0){
          curRow.push('O')
        } else {
          curRow.push('X')
        }

      }
    } else {
      chessArr.push([])
      let curRow = chessArr[i]
      for(let j = 0; j < columns; j++){
        if(j % 2 === 0){
          curRow.push('X')
        } else {
          curRow.push('O')
        }
      }
    }
  }
  return chessArr;
}


chessBoard(6, 4)


// [
//     ["O","X","O","X"],
//     ["X","O","X","O"],
//     ["O","X","O","X"],
//     ["X","O","X","O"],
//     ["O","X","O","X"],
//     ["X","O","X","O"]
// ]
