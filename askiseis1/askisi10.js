
/*Γράψτε μια συνάρτηση που παίρνει δύο
πίνακες και επιστρέφει έναν νέο πίνακα που
περιέχει στοιχεία που είναι κοινά και στους
δύο πίνακες**/


function commonElements(arr1, arr2){
  return arr1.filter(element => arr2.includes(element))
}

let array1 = [1,3,4,7,9,6,0]
let array2 = [1,4,7,9,8,6,0]

let common = commonElements(array1, array2)

console.log(common)











