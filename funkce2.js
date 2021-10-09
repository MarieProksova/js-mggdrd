function prvocislo (cislo) {
for (let i = 2; i < cislo; i++)  {
  if(cislo % i === 0) {
    return false;
  }
}
return true;
}


console.log(prvocislo(Number(prompt("Zadej číslo:"))));
