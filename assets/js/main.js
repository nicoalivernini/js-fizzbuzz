var i = 0;

do {
  i++;
  // Se i numeri sono sia multipli di 3 che di 5 stampi FizzBuzz.
  if (i %3 == 0 && i %5 == 0) {
    document.getElementById('numeri').innerHTML += "<li>" + "FizzBuzz" + "</li>";
  } //Altrimenti se i numeri sono multipli di 3 stampiamo "Fizz" al posto del numero.
    else if (i %3 == 0) {
    document.getElementById('numeri').innerHTML += "<li>" + "Fizz" + "</li>";
  } //Altrimenti se i numeri sono multipli di 5 stampiano "Buzz" al posto del numero
    else if (i %5 == 0) {
    document.getElementById('numeri').innerHTML += "<li>" + "Buzz" + "</li>"
  } // Altrimenti se non sono multipli ne di 3 ne di 5 stampiamo il numero
    else {
    document.getElementById('numeri').innerHTML += "<li>" + i + "</li>"
  }
} while (i < 100);


// ESEGUO CON IL CIFLO FOR - BONUS

var numeri = [];

// Programma che stampa numeri da 1 a 100
for (var i = 1; i < 100 + 1; i++) {
  numeri = [i];
    // Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
    if (numeri %3 == 0 && numeri %5 == 0) {
      document.getElementById('for-bonus').innerHTML += "<li>" + "FizzBuzz" + "</li>"
    }
    //Multipli di 3 stampiamo "Fizz" al posto del numero - possiamo utilizzare il %2?
    else if (numeri %3 == 0) {
    document.getElementById('for-bonus').innerHTML += "<li>" + "Fizz" + "</li>"
  } //Multipli di 5 stampiano "Buzz" al posto del numero
    else if (numeri %5 == 0) {
    document.getElementById('for-bonus').innerHTML += "<li>" + "Buzz" + "</li>"
  } //Ai numeri non multipli di 3 / 5 stampiamo solo il nome
    else {
    document.getElementById('for-bonus').innerHTML += "<li>" + numeri + "</li>"

  }


}
