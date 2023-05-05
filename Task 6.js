
let myArr=[1,1,1,1,1]

function arrayCheck(arr) {
  
  for (let i = 0; i < arr.length; i++) {
      if (arr[0] !== arr[i]) {
        return false;
      }  
   }
  return true 
}

console.log(arrayCheck(myArr))

// Хоть я и не проходил функции пока(FRPRO-16) мне пришлось их применить, иначе я не понял как сделать это задание