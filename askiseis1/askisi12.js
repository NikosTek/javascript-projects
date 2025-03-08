/* Γράψτε μια συνάρτηση που παίρνει ως είσοδο ένα
αντικείμενο και μια συνάρτηση mapping και επιστρέφει ένα
νέο αντικείμενο όπου οι τιμές είναι το αποτέλεσμα της
εφαρμογής της συνάρτησης mapping στις αρχικές τιμές
**/

function mapValues(obj, mapping){
  return Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, mapping(value)]))
}


const arxikolexiko = {"a":4, "b": 9, "c":2};
const  result = mapValues(arxikolexiko, o => o * 9);
console.log(result);




