
/*
Δημιουργήστε ένα object user με ιδιότητες, name, age, city.
Εκτυπώστε ένα μήνυμα χρησιμοποιώντας αυτές τις
ιδιότητες. Προσθέστε μια μέθοδο hello() που εκτυπώνει έναν
χαιρετισμό χρησιμοποιώντας το name. Καλέστε τη μέθοδο
hello()

**/

let user = {
  name:"nikos",
  age:"31",
  city:"Chania",

  hello: function(){
    console.log("geia " + this.name)
  }
}

console.log("eimai o " + user.name + ", eimai " + user.age + " kai menw sta " + user.city)

user.hello()




