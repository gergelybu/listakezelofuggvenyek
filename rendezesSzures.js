export function rendezBarmiSzerint(lista, kulcs, irany) {
  lista.sort(function (a, b) {
    let ertek = 1;
    if (a[kulcs] < b[kulcs]) {
      ertek = -1;
    }
    ertek *= irany;
    return ertek;
  });
  console.log(lista);
}

/** filter - szűrés
 * új listát hoz létre, szűrési feltétel
 */