
/*
Γράψτε μια συνάρτηση που να παίρνει ως
παράμετρο έναν nested πίνακα και
επιστρέφει έναν μονοδιάστατο πίνακα που
να περιέχει όλα τα στοιχεία.
**/

function monodiastatos(arr){
  return arr.flat()
}

let nestedArray = [7,4,[[79,[0,743]]],[576,[34,2]],[1,[9,7,5,4]]]

let flatArray = monodiastatos(nestedArray)

console.log(flatArray)