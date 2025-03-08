/*
1. Δεδομένου ενός πίνακα αριθμών, χρησιμοποιήστε τη
συνάρτηση map για να δημιουργήσετε έναν νέο πίνακα
όπου κάθε αριθμός διπλασιάζεται
**/

const num = [7,45,90,232,545,67]
const dupl = doMap(num, p => p * p)
console.log(dupl)

function doMap(pinakas, callback){
  return pinakas.map(callback)
}






















