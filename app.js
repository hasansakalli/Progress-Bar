const ileri = document.getElementById("ileri");
const geri = document.getElementById("geri");
const numbers = document.querySelectorAll("p");
const cizgiler = document.querySelectorAll(".cizgi");

var count = 1;
let i = 0;
let a = -1;
for (let i = 0; i < numbers.length; i++) {
  const result = numbers[i];
  console.log(result);
}

for (let a = -1; a < cizgiler.length; a++) {
  const result2 = cizgiler[i];
  console.log(result2);
}

function next() {
  count++;
  i++;
  a++;

  numbers[i].classList.add("activ");
  cizgiler[a].classList.add("activ-cizgi");
  console.log(count);

  if (count == numbers.length) {
    ileri.disabled = true;
    geri.disabled = false;
  }
}

function back() {
  numbers[i].classList.remove("activ");
  cizgiler[a].classList.remove("activ-cizgi");
  count--;
  i--;
  a--;

  console.log(count);
  console.log(numbers[i]);

  if (count == 1) {
    geri.disabled = true;
    ileri.disabled = false;
  }
}
