/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
//Bilangan prima yaitu bilangan yang memiliki dua  faktor yaitu bilangan yang di habis di bagi dengan bilangan itu sendiri dan satu
for (let number = 2; number <= 100; number++) {
  let Prime = true;
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      Prime = false;
    }
  }
  if (Prime === true) {
    console.log(number);
  }
}

/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop
let primeCounter = 0;
let fiftiethPrime = 0;
let numb = 2;
while (primeCounter < 50) {
  let prime = true;
  for (let i = 2; i < numb; i++) {
    if (numb % i === 0) {
      prime = false;
    }
  }
  if (prime === true) {
    primeCounter++;
    fiftiethPrime = numb;
  }
  numb++;
}
console.log(fiftiethPrime);

/// Soal - 03
/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop
let oddCounter = 0;
let fiftiethOdd;
let i = 1;
do {
  if (i % 2 === 1) {
    oddCounter++;
    fiftiethOdd = i;
  }
  i++;
} while (oddCounter < 50);
console.log(fiftiethOdd);
