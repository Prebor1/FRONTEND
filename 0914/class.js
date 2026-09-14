class Szemely{

    constructor(nev, foglalkozas, szuletesiEv){
        this.nev = nev;
        this.foglalkozas = foglalkozas;
        this.szuletesiEv = szuletesiEv;
    }

    hanyEves(){
        const datum = new Date();
        return datum.getFullYear() - this.szuletesiEv;
    }
}

class Alkalmazott extends Szemely{
    static bonusz = 10;
    #azonosito = undefined;

    constructor(nev, foglalkozas, szuletesiEv, fizetes){
        super(nev, foglalkozas, szuletesiEv);
        this.fizetes = fizetes;
    }

    get azonosito(){ return this.#azonosito; }
    set azonosito(azon){
        if (typeof(azon) == "number")
            this.#azonosito = azon;
    }
    /* Bónuszt csak decemberben kapnak az emberek
        - ha december van, akkor a bónusszal emelt fizetés a fizetés
        - különben a normális fizetést kapják
    */
   fizetesEbbenAHonapban(){
        if( (new Date()).getMonth() == 11)
            return this.fizetes*(1+(Alkalmazott.bonusz/100));
        return this.fizetes;
   }
}

//feladat
class Kisfonok extends Alkalmazott{
    #beosztottjai = 0;

    constructor(nev, foglalkozas, szuletesiEv, fizetes, beosztottakSzama) {

        super(nev, foglalkozas, szuletesiEv, fizetes);

        if (beosztottakSzama>=0 && beosztottakSzama<=20)
            this.#beosztottjai = beosztottakSzama
        
    }

    get beosztottakSzama() {return this.#beosztottjai; }
}
//////////////////////////////

const bela = new Szemely("Vak Béla", "kéményseprő", 1975); //ez egz példánya a Szemely classnek
console.log(bela);
console.log(`${bela.nev} ${bela.hanyEves()} éves idén`)

const irenke = new Alkalmazott("Kovács Irén", "recepciós", 1968, 523999);

irenke.azonosito = "asd asd"; //nem engedi mert nem szam
console.log(irenke.azonosito); 
irenke.azonosito = 1234;
console.log(irenke.azonosito); 

console.log(irenke.fizetesEbbenAHonapban())

