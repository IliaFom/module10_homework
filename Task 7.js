let myArr=[1, 4, 5, 0, null, 0, 'some text', 2, 20, BigInt, Boolean]

let zeroCount=0
let evenCount=0
let oddCount=0
let notNumberCount=0

for (let i=0; i<myArr.length; i++){
  
  if (typeof myArr[i] !=='number') {
    notNumberCount++;
    console.log(myArr[i])
  }
  else if (myArr[i]===0){
    zeroCount++;
    console.log(myArr[i])
  }
  else if (myArr[i]%2==1){
    oddCount++
    console.log(myArr[i])
  }
  else{
    evenCount++
    console.log(myArr[i])
  }
    
}

console.log(`Нечисловых элементов: ${notNumberCount}; Количество нулей(0): ${zeroCount}; Количество нечетных чисел: ${oddCount}; Количество четных чисел: ${evenCount}`)