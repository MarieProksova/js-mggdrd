function prvocislo (cislo) {
for (let i = 2; i < cislo; i++)  {
  if(cislo % i === 0) {
    console.log("Číslo " + cislo + " je dělitelné:" + i);
    return false;
  }
  }
  console.log("Číslo " + cislo + " je dělitelné pouze samosebu a jedničkou");
return true;
}


console.log(prvocislo(Number(prompt("Zadej číslo:"))));
