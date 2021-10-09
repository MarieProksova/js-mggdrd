let jmeno = prompt("Jak se jmenuješ?");
let vek = Number(prompt ("Zadej věk"));

 
if (vek < 18) {
  let vysledek = 18 - vek;
  console.log ("Vaše jméno je" + jmeno + ", je Vám " + vek + "let a tak musíte ještě "+ vysledek + " let počkat, než budete moci řídit auto.");
}
  else {
    console.log("Vaše jméno je  " + jmeno + ", je Vám " + vek + " let a tak máte právo řídit auto.")
  };
