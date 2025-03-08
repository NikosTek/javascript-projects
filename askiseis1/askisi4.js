/*
Δημιουργήστε έναν πίνακα που ονομάζεται cities με τις τιμές
“Athens", “London", “Paris". Προσθέστε “Berlin" στο τέλος
του πίνακα. Διασχίστε τον πίνακα και εκτυπώστε κάθε πόλη

**/

let cities = ["Athens", "London", "Paris"];

cities.push("Berlin")

for(let i = 0; i < cities.length;i++){
  console.log(cities[i]);
}