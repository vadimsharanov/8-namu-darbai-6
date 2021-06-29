// Javascript "Klasės"
// 1. Susikurti klasę "Namas". 
// Klasės kintamieji:
// miestas - tekstas,
// pastatymo data - datos formatas, 
// adresas - tekstas,
// laiptinių skaičius - masyvas, turintis tiek elementų, kiek yra laiptinių. Pvz: [1,2,3,4]
// butų skaičius - masyvas, turintis tiek elementų, kiek butų yra laiptinėje.Pvz: [20, 22, 19, 13]
// bendras butų skaičius - suskaičiuojamas automatiškai. Apskaičiavimui susikurti statinį metodą.

"use strict"
let pastatymoData = []
let laiptines = []



// Random skaiciu funkcija\\
function randomFunctionWithMax (min, max) {
    return Math.floor((Math.random() *  (max - min+1)) + min)  // minimali reiksme ieina, maksimali ne
}

// Laiptiniu generavimas
for (let i=1; i <= randomFunctionWithMax(1,5); i ++) {
    laiptines.push(i)
}
let laiptiniuSkaicius = laiptines.length;
// Butu generavimas\\
let butuSkaicius = []
for (let i = 1; i < randomFunctionWithMax(10, 30); i++) {
    butuSkaicius.push(randomFunctionWithMax(1,100))
}

console.log(butuSkaicius);


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
        let suma = butuSkaicius.length * laiptiniuSkaicius;
        return suma;
    }
 
}

// 2. Susikurti klasę "Butas".
// Klasės kintamieji:
// numeris - skaičius,
// kambarių skaičius - kiek kambarių turi butas,
// gyventojų skaičius bute - skaičius,

 

// Klasės metodai:
// info() - išveda visą informaciją apie butą.

 

class Butas extends Namas {
    constructor(butoNumeris,kambariuSkaicius, gyventojuSkaicius, miestas,pastatymoData, adresas, laiptiniuSkaicius, butuSkaicius, butuSuma) {
        super(miestas,pastatymoData, adresas, laiptiniuSkaicius, butuSkaicius, butuSuma)
        this.butoNumeris = butoNumeris;
        this.kambariuSkaicius = kambariuSkaicius;
        this.gyventojuSkaicius = gyventojuSkaicius;

    }
    informacija () {
        return `Bute nr. ${this.butoNumeris}, yra ${this.kambariuSkaicius} kambariai, kuriuose is viso gyvena ${this.gyventojuSkaicius} gyventojai.`
    }
}


let gavno = new Namas("Dukstas", (Namas.gimimoData(50)), "Duksto g. 1", laiptiniuSkaicius, butuSkaicius, (Namas.butuSumosSkaiciavimas(1,2)))
let gavno1 = new Butas(1,2,3);
console.log(gavno1.informacija());


// 3. Susikurti "Namas" objektų masyvą.
// Masyva sudaro 5 objektai sukurti pagal klasę. 
// Duomenis užpildyti savo nuožiūrą.

 

// 4. Masyvą išvesti į console.log.
let namoMasyvas = []
namoMasyvas.push(new Namas("Dukstas",Namas.gimimoData(20), "Duksto g. 1", laiptiniuSkaicius, butuSkaicius, Namas.butuSumosSkaiciavimas(1,2)))
namoMasyvas.push(new Namas("Dukstas",Namas.gimimoData(20), "Duksto g. 1", laiptiniuSkaicius, butuSkaicius, Namas.butuSumosSkaiciavimas(1,2)))
namoMasyvas.push(new Namas("Dukstas",Namas.gimimoData(20), "Duksto g. 1", laiptiniuSkaicius, butuSkaicius, Namas.butuSumosSkaiciavimas(1,2)))
namoMasyvas.push(new Namas("Dukstas",Namas.gimimoData(20), "Duksto g. 1", laiptiniuSkaicius, butuSkaicius, Namas.butuSumosSkaiciavimas(1,2)))
namoMasyvas.push(new Namas("Dukstas",Namas.gimimoData(20), "Duksto g. 1", laiptiniuSkaicius, butuSkaicius, Namas.butuSumosSkaiciavimas(1,2)))
console.log(namoMasyvas);




 




 

// Papildoma: Vieną iš klasės "Namas" objektų "pastatyti". 

 

// T.y. Pasinaudojant informacija, kiek yra laiptinių ir butų, sudėlioti <div> elementus kubeliais. Pvz:
// Namas turi dvi laiptines [1,2].
// Vienoje laiptinėje yra 4 butai, kitoje 5 butai. Div sudeliojami taip: http://prntscr.com/179gyiv

 

// Kiekvieno kvadratėlio viduje atvaizduojamas buto numeris.

