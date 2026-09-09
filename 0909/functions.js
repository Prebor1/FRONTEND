/*

let szam = 3;
szam = 3.14;
let szoveg = "Hello";
szoveg = 'hello'; 

let a = `A kedvenc szamom: ${szam}`; // Alt Gr + 7 (backtick)

let n = null; //ures az ertek (semmi)
let u = undefined; //meg nincs ertek definialva, de kesobb definialva lesz
//orokke null vs kesobb lesz benne valami

//amig a frontend ker, addig undefined, akkor mar nem amikor a backend valaszol

let szam2 = 12.23;
//dontsuk el szam 2 pozitiv-e?
if(szam2 > 0){
    console.log("pozitiv");
}
else if (szam2<0){
    console.log("negativ")
}
else{
    console.log("nulla")
}

let i = undefined;
for(i=0; i<10; i++);
console.log(i); //10

let b = undefined;
for(b=0; b<10; b++);{
    console.log(b); 
}

let paros = 2;
while(paros<= 10){
    console.log(paros);
    paros += 2;
}

//Tömbök
let autok = ["Audi", "BMW", "Toyota", "Kia"];
console.log(autok[0]);
autok[1] = "Ford"; //1. elemet (BMW) atirjuk
console.log(autok[1]);

//uj elem
autok.push("Skoda");

//tömb bejárása ciklussal
for(i=0; i<autok.length; i++){
    console.log(`${i}.: ${autok[i]}`)
}

*/

/** 

function udvozlet(){
    console.log("HELLO HALLO");
}

//arrow function
let udv = () => {console.log("Üdv")}

udv();

function negyzetreEmel(num){
    return num * num;
}
//arrow func verzio:
let negyzet = (num) => {return num * num}; 

let autok = ["Audi", "BMW", "Toyota", "Kia"];

function szures(auto){
    return auto == "Toyota"; //egyszeru
}

console.log(autok.filter( auto => auto == "Toyota"));

// Törlés: Toyoták kitörlése
autok = autok.filter( auto => auto != "Toyota");
console.log(autok);

//Index meghatározása érték alapján
autok.push("Honda");
autok.push("Mercedes");
autok.push("BYD");

console.log(autok)

console.log(autok.findIndex(auto => auto == "BYD"))


//Spread operátor: szetbontja elemeire a tombot
autok = ["Seat", ...autok, "Nissan"];
console.log(autok);

//Rest paraméter: osszefuz parametereket egy tombbe
//Keszitsunk fuggvenyt amely szamokat ad ossze, visszadja a szamok osszeget
function osszead(...szamok){
    let osszeg = 0;
    for (let i=0; i<szamok.length; i++)
        osszeg += szamok[i];
    return osszeg
}
console.log(osszead(2, 3, 4, 5))
console.log(osszead(2, 89, 53, 63, 22, 63))


//megkeresi az adott erteket a tombben, true or false
console.log(autok.includes("Opel"))
console.log(autok.includes("Audi"))

console.log(autok.shift())
console.log(autok);

console.log(Array.isArray(autok)) //az autok egy tomb? false

*/

// Feladat:
/*
    Adott egy 5 elemű tömb, amely egész számokat tartalmaz: [36, -2, 112, 101, 22]
    1.) Adjon hozzá a tömbhöz 10 új, véletlen egész számot a [-100; +100] tartományról
     - Math.random()
     - Math.floor()
    2.) Szűrjük ki egy új tömbbe a pozitív és páros számokat
    3.) Döntsük el (igen/nem), hogy az új tömbben van-e 100-nál nagyobb szám
    4.) Határozzuk meg az új tömb legnagyobb értékű elemét
*/

// 1)
let tomb = [36, -2, 112, 101, 22];
for (let i=0; i < 10; i++){
    tomb.push(Math.floor(Math.random() * 200 - 100 ));
}
console.log(tomb);

// 2)

let pozitivparos = [];
for (let i=0; i<tomb.length; i++){
    if (tomb[i] > 0 && tomb[i] % 2 == 0){
        pozitivparos.push(tomb[i]);
    }
}
console.log(pozitivparos);

// 3)

console.log(pozitivparos.findIndex(t => t > 100) >= 0 ? "igen" : "nem");


//4.

console.log(Math.max(...tomb));