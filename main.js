import { KUTYALISTA } from "./adat.js";
import { osszeallit, osszeallit2 } from "./adatkezeles.js";

window.addEventListener("load", init);

let ARTICLE;
let kartyak;
let tablazat;
function init() {
  ARTICLE = document.querySelector("article");
  kartyak = document.querySelector("section.kartyak");
  tablazat = document.querySelector("section.tablazat");
  kartyak.innerHTML = osszeallit(KUTYALISTA);
  tablazat.innerHTML = osszeallit2(KUTYALISTA);
  torlesGomb();
  const SUBMIT = document.querySelector("aside button");
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
  let Kutya = {};
  let szuka = document.querySelector("#szuka");
  let kan = document.querySelector("#kan");
  const ADAT = document.querySelectorAll("input");
  console.log("Vauka");
  let index = 0;
  for (const kulcs in KUTYALISTA[index]) {
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
  }
  KUTYALISTA.push(Kutya);
  console.log(KUTYALISTA);
  kartyak.innerHTML = osszeallit(KUTYALISTA);
  tablazat.innerHTML = osszeallit2(KUTYALISTA);
  torlesGomb();
}
