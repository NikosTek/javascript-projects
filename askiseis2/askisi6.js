/*
6. Στη συνέχεια χρησιμοποιήστε τη συνάρτηση map για
να δημιουργήσετε έναν νέο πίνακα που περιέχει μόνο
τα ονόματα.

const people = [
{name:'Alice',age:30},
{name:'Bob',age:25},
{name:'Charlie',age:35}
];
**/

const users = [ {id: 1, firstname: "Nikos", age: 33},
                {id: 2, firstname: "Stamatis", age: 15},
                {id: 3, firstname: "vagelis", age:19}]

const firstnameUsers = users.map(user => user.firstname)
console.log(firstnameUsers)
















