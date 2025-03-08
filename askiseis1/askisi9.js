
/*Γράψτε μια συνάρτηση που παίρνει έναν
πίνακα και ένα μέγεθος υποπίνακα και
χωρίζει τον πίνακα σε υποπίνακες του
καθορισμένου μεγέθους
**/


function splitArray(arr, x){
  let ipopinakes = []

  for(let i= 0; i < arr.length; i+=x){
    ipopinakes.push(arr.slice(i, i+x))
  }
  return ipopinakes
}

let numbers = [1,2,3,4,5,6,7,8,98,2,3]

let subArrays = splitArray(numbers,2)
console.log(subArrays)