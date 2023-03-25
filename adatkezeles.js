export function osszeallit(lista) {
  let txt = "";
  txt += `<div class = "container">`;
  for (let index = 0; index < lista.length; index++) {
    for (const key in lista) {
      lista[key];
    }
    for (const kutya of lista) {
    }
    txt += `<div class= "kartya">`;
    txt += `<h3>Kutya adatai</h3>`;
    for (const kulcs in lista[index]) {
      txt += `<p>${kulcs}: ${lista[index][kulcs]}</p>`;
    }
    txt += `</div>`;
  }
  txt += `</div>`;
  return txt;
}

export function osszeallit2(lista) {
  let txt = "";
  txt += `<div class = "container">`;
  txt += `<table>`;
  for (let index = 0; index < lista.length; index++) {
    txt += `<tr>`;
    for (const kulcs in lista[index]) {
      txt += `<td>${kulcs}: ${lista[index][kulcs]}</td>`;
    }
    txt += `</tr>`;
  }
  txt += `</table>`;
  txt += `</div>`;
  return txt;
}
