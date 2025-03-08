/*
5. Δεδομένου ενός πίνακα αντικειμένων,
χρησιμοποιήστε τη συνάρτηση filter για να
δημιουργήσετε έναν νέο πίνακα που περιλαμβάνει
μόνο χρήστες κάτω των 30 ετών
**/


const users = [ {id: 1, first: "Nikos", age: 33},
                {id: 2, first: "Stamatis", age: 15},
                {id: 3, first: "vagelis", age:19}]

const youngUsers = users.filter(user => user.age < 30)
console.log(youngUsers)

















