/*
2. Δεδομένου ενός πίνακα αριθμών, χρησιμοποιήστε τη
συνάρτηση filter για να δημιουργήσετε έναν νέο πίνακα
που περιλαμβάνει μόνο τους ζυγούς αριθμούς
**/


const num = [7,45,90,232,545,67]

const zigoi = doFilter(num, p => p % 2 == 0)
console.log(zigoi)

function doFilter(pinakas, callback){
  return pinakas.filter(callback)
}




















