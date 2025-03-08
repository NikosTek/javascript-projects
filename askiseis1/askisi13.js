/* 
Γράψτε μια συνάρτηση που παίρνει ως είσοδο ένα
αντικείμενο και μία callback συνάρτηση μετασχηματισμού και
μετασχηματίζει το αντικείμενο για κάθε ζεύγος κλειδιού-τιμής
(π.χ. μετατρέπει τα keys σε uppercase)

**/

function transform(obj, transformObj){
  return Object.fromEntries(Object.entries(obj).map(([key, value]) => transformObj(key,value));
}


const arxikolexiko = {"a": 4, "b": 9, "c": 2};
const result = transform(arxikolexiko, (key, value) => [key.toUpperCase(), value * 3]);
console.log(result);