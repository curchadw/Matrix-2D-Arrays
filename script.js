

let matrix = [[1,2,''],['',16,32],[64,'',256],[512,1024,''],[4096,'',16384]]




  //flatten the array
 

  // for(let i = 0; i< newArray.length; i++){
  //   let value = Math.pow(2,x)
  //     if(newArray[i] !== ''){
  //       continue;
  //     }else{
  //       newArray[i].replace('',parseInt(value,10))
  //     }
        
  //  }
  //  return newArray

 

const power =(matrix)=>{
  //index start
  let expo = 0
  //loop through 2d array
  for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[i].length; j++){
      //if a index is blank...run math function with pow equal expo
      if(matrix[i][j] === ''){
        matrix[i][j] = Math.pow(2,expo)
      }
      //then increment expo
      expo++
    }
  }
  return matrix
}

console.log(power(matrix))

//2d array from scratch

const array = new Array(6)

let ele = 1

for (let i = 0; i < array.length; i++){
   array[i] = new Array(3)
  for (let j = 0; j < array[i].length; j++){
    array[i][j] = ele
    ele = 2*ele
  }
 

}

console.log(array)


