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
