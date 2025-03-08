/* Γράψτε μια συνάρτηση που παίρνει ένα αντικείμενο και έναν
πίνακα από keys και επιστρέφει ένα νέο αντικείμενο με μόνο
τα ζεύγη key-value των οποίων τα keys βρίσκονται στον
πίνακα **/

function filterKeys(x, arr){
  return Object.fromEntries(Object.entries(x).filter(([key]) => arr.includes(key)))
}


const originalobj = {α:1,b:2,c:3,z:4,y:5}

const keysToKeep = ['z', 'y', 'b']

const filtered = filterKeys(originalobj, keysToKeep)

console.log(filtered)

