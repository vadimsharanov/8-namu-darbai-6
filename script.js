"use strict"
let miestas = "hueta"
let pastatymoData = []
let laiptiniuSkaicius = []
let butuSkaicius = []
class Namas {
    constructor (miestas,pastatymoData, adresas, laiptiniuSkaicius, butuSkaicius, butuSuma) {
        this.miestas = miestas;
        this.pastatymoData = pastatymoData;
        this.adresas = adresas;
        this.laiptiniuSkaicius = laiptiniuSkaicius;
        this.butuSkaicius = butuSkaicius;
        this.butuSuma = butuSuma;
    }
    static gimimoData (pastatymoData) {
        let skaiciavimas = new Date();
        return skaiciavimas.getFullYear() - pastatymoData
    }
    static butuSumosSkaiciavimas (a,b) {
        let suma = 
        return suma;
    }
 
}

let gavno = new Namas("Dukstas", (Namas.gimimoData(13)), "Duksto g. 1", laiptiniuSkaicius, butuSkaicius, (Namas.butuSumosSkaiciavimas(1,2)))
console.log(gavno);
// Javascript "Klasės"

 

// 1. Susikurti klasę "Namas". 
// Klasės kintamieji:
// miestas - tekstas,
// pastatymo data - datos formatas, 
// adresas - tekstas,
// laiptinių skaičius - masyvas, turintis tiek elementų, kiek yra laiptinių. Pvz: [1,2,3,4]
// butų skaičius - masyvas, turintis tiek elementų, kiek butų yra laiptinėje.Pvz: [20, 22, 19, 13]
// bendras butų skaičius - suskaičiuojamas automatiškai. Apskaičiavimui susikurti statinį metodą.

 

// 2. Susikurti klasę "Butas".
// Klasės kintamieji:
// numeris - skaičius,
// kambarių skaičius - kiek kambarių turi butas,
// gyventojų skaičius bute - skaičius,

 

// Klasės metodai:
// info() - išveda visą informaciją apie butą.

 

// 3. Susikurti "Namas" objektų masyvą.
// Masyva sudaro 5 objektai sukurti pagal klasę. 
// Duomenis užpildyti savo nuožiūrą.

 

// 4. Masyvą išvesti į console.log.

 

// Papildoma: Vieną iš klasės "Namas" objektų "pastatyti". 

 

// T.y. Pasinaudojant informacija, kiek yra laiptinių ir butų, sudėlioti <div> elementus kubeliais. Pvz:
// Namas turi dvi laiptines [1,2].
// Vienoje laiptinėje yra 4 butai, kitoje 5 butai. Div sudeliojami taip: http://prntscr.com/179gyiv

 

// Kiekvieno kvadratėlio viduje atvaizduojamas buto numeris.