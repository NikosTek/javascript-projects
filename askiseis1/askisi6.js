
/*
Γράψτε μια συνάρτηση υπολογισμού του εμβαδόν ενός
κύκλου που να παίρνει την ακτίνα ενός κύκλου ως
παράμετρο και να επιστρέφει το εμβαδόν (πr2). Καλέστε τη
συνάρτηση με ακτίνα 5
**/

function circleArea(radius){
  return Math.PI * radius * radius;
}


let radius = 5
let area = circleArea(radius)

console.log("to emvadon tou kiklou me aktina: " + radius + " einai " + area)







