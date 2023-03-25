import { KUTYALISTA, KUTYAKULCS } from "./adat.js";
import { osszeallit, osszeallit2 } from "./adatkezeles.js";
import { rendezBarmiSzerint } from "./rendezesSzures.js";

window.addEventListener("load", init);

let ARTICLE;
let kartyak;
let tablazat;

function init() {
  rendezBarmiSzerint(KUTYALISTA, "kor", 1);
  ARTICLE = document.querySelector("article");
  kartyak = document.querySelector("section.kartyak");
  tablazat = document.querySelector("section.tablazat");
  kartyak.innerHTML = osszeallit(KUTYALISTA);
  tablazat.innerHTML = osszeallit2(KUTYALISTA);
  torlesGomb();
  const SUBMIT = document.querySelector("#rogzites");
  SUBMIT.addEventListener("click", ujKutya);
}

function torlesGomb() {
  const TR = document.querySelectorAll("tr");

  for (let index = 0; index < KUTYALISTA.length; index++) {
    const TD = document.createElement("td");
    const TORLES = document.createElement("button");
    TORLES.innerText = "Törlés";
    TR[index].appendChild(TD);
    TD.appendChild(TORLES);
    TORLES.addEventListener("click", function () {
      torlesFunkcio(index);
    });
  }
}

function torlesFunkcio(index) {
  KUTYALISTA.splice(index, 1);
  kartyak.innerHTML = osszeallit(KUTYALISTA);
  tablazat.innerHTML = osszeallit2(KUTYALISTA);
  torlesGomb();
}

function ujKutya() {
  const kutya = {};
  let szuka = document.querySelector("#szuka");
  let kan = document.querySelector("#kan");
  /*const ADAT = document.querySelectorAll("input");
  let index = 0;
  for (const kulcs in KUTYAKULCS[index]) {
    if (ADAT[index].id == "szuka" && (szuka.checked = true)) {
      console.log("szuka");
      Kutya[kulcs] = "szuka";
      index++;
    } else if (ADAT[index].id == "kan" && (kan.checked = true)) {
      console.log("kan");
      Kutya[kulcs] = "kan";
    } else {
      Kutya[kulcs] = `${ADAT[index].value}`;
    }
    index++;
  } */
  const NevInputElem = document.getElementById("kneve");
  const KorInputElem = document.getElementById("kkor");
  const LabaInputElem = document.getElementById("klaba");
  const FajtaInputElem = document.getElementById("kfajta");
  const MMagInputElem = document.getElementById("mmag");
  const NemeInputElem = document.getElementById("szuka");
  kutya.nev = NevInputElem.value;
  kutya.kor = KorInputElem.value;
  kutya.fajta = FajtaInputElem.value;
  if (NemeInputElem.checked) {
    kutya.nem = "szuka";
  } else {
    kutya.nem = "kan";
  }
  console.log(kutya);
  KUTYALISTA.push(kutya);
  console.log(KUTYALISTA);
  kartyak.innerHTML = osszeallit(KUTYALISTA);
  tablazat.innerHTML = osszeallit2(KUTYALISTA);
  torlesGomb();
}
