// Come faccio a sapere se un numero è divisibile per?
// Abbiamo visto qualcosa di particolare che possiamo usare?

var numeri = [];

// Programma che stampa numeri da 1 a 100
for (var i = 1; i < 100 + 1; i++) {
  numeri = [i];
  document.getElementById('numeri').innerHTML += "<li>" + numeri + "</li>"

  //Multipli di 3 stampiamo "Fizz" al posto del numero - possiamo utilizzare il %2?
  if (numeri %3 == 0) {
    document.getElementById('numeri').innerHTML += "<li>" + "Fizz" + "</li>"
  } //Multipli di 5 stampiano "Buzz" al posto del numero
    else if (numeri %5 == 0) {
    document.getElementById('numeri').innerHTML += "<li>" + "Buzz" + "</li>"
  }

  // Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
  if (numeri %3 == 0 && numeri %5 == 0) {
    document.getElementById('numeri').innerHTML += "<li>" + "FizzBuzz" + "</li>"
  }
}
