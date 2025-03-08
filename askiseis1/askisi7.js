
/*
Γράψτε μια συνάρτηση που παίρνει ως
παράμετρο έναν πίνακα και επιστρέφει έναν
νέο πίνακα που περιέχει μόνο τις μοναδικές
τιμές (χωρίς διπλότυπα)
**/

function getUniqueValues(arr){
  return  [...new Set(arr)] 
}

let diplotipa = [1,1,35,46,6,6,46,90,0,76,7,7,0,9]

let uniqueValues = getUniqueValues(diplotipa)

console.log(uniqueValues)