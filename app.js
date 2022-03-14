// Zmienne i warunki //
//************************************************************** */
//zad 1. Stwórz zmienną://

// a) typu string o nazwie name i wartości 'Jan' //
const name = "Jan";

// b) typu number o nazwie age i wartości 22 //
const age = 22;

// c) typu boolean o nazwie isOpen i wartości true //
const isOpen = true;

// d) typu string o nazwie stringBoolean o wartości true //
const stringBoolean = "true";

// e) typu string o nazwie stringNumber o wartości 100 //
const stringNumber = "100";

// zad 2. Za pomocą console.log wyświetl wyniki poniższych równań przypisując je do zmiennej: //
// a) przypisz do zmiennej wynik reszty z dzielenia 10 przez 4 //

const modulo = 10 % 4;
console.log(modulo);

// b) utwórz i zrób console.log zmiennej zawierającej zdanie "Tomasz ma 33 lata"  //

const taskTwoB = {
  imie: "Tomasz",
  wiek: 33,
};
const { imie, wiek } = taskTwoB;
console.log(`${imie} ma ${wiek} lata`);

const nameString = "Tomasz";
const ageTomasz = 33;
console.log(`${nameString} ma ${ageTomasz} lata`);

// c) Utwórz string "jan kowalski" na dwa sposoby dodając przerwe między wyrazami, //
// które są nastepującymi stringami: const firstName = 'jan', const lastName = 'kowalski' //

const firstName = "Jan";
const lastName = "Kowalski";
console.log(firstName + " " + lastName);
console.log(`${firstName} ${lastName}`);

// zad 3  Dodaj dwie cyfyr(dowolnie wybranych) do zmiennej, później zrób consol.log tej zmiennej,
// aby wyświetliło się w następujący sposób: 'wynik', 4  <--- (4 to przykładowa wartość zmiennej)//

const numberTwo = 11 + 22;
console.log("wynik", numberTwo);

// zad 4 Stwórz tablicę://

// a) 3 elementową z cyframi od 1 do 3 //

const arrayTaskFourA = [1, 2, 3];

// b) 3 elementową z markami aut //

const arrayTaskFourB = ["Audi", "Opel", "Ford"];

// c) 3 elementową składającą się z wartości true, false i true //

const arrayTaskFourC = [true, false, true];

// d) pustą tablicę //

const arrayTaskFourD = [];

// e) składającą się z 5 dowolonych wartości z pomieszanymi typami //

const arrayTaskFourE = ["one", 55, "true", null, undefined];

// f) zrób console.loga w którym z powyższej tablicy wyświetlasz wartość która jest
// druga w kolejności od początku, //

console.log(arrayTaskFourE[1]);

// g) *** Jaka właściwość i jak użyta słuzy do wyświetlenia długości tablicy? Stwórz własną tablicę
// z 3 elementami i wyświetl za pomocą consol.log jej długość,

const arrayLength = [1, 2, 3, "abc", true, "false"];
console.log(`długość tablicy arrayLength to ${arrayLength.length}`);

// h) *** Czy wiesz jak stworzyć pustę tablicę ? dodać do niej losową wartość i wyświetlić za pomocą
// console.loga już zmienioną tablicę? //

const clearTab = [];
clearTab.push("dodana", "wartosc");
console.log(clearTab);

// i) *** Stwórz tablicę z obiektami, które będą zawierały imię, nazwisko i wiek osoby,
// tablica powinna zawierać 3 takie obiekty i wyświetl imię drugiej osoby z tej tablicy, //

const threeBoard = [
  (nameOne = {
    name: "Adam",
    surname: "Kowal",
    age: 30,
  }),
  (nameThree = {
    name: "Krzysztof",
    surname: "Walczak",
    age: 30,
  }),
  (nameTwo = {
    name: "Jacek",
    surname: "Borc",
    age: 30,
  }),
];
console.log(threeBoard[1].name);

// j) *** stwórz zmienną z wartością = 2 i powiedz czy da sie tą zmienną umieścić w
// deklaracji tablicy tak aby uzyskać tablicę const arr = [2] ?  //
// DA SIĘ ! //

const number = 2;
const boardJ = [number];
console.log(boardJ);

console.log("\n", " Zadanie 5 : ppkt. A ");

// 5. Stwórz obiekt: //

// a) pusty obiekt //

const emptyObject = {};
console.log(emptyObject, "pusty obiekt");

// b) obiekt o nazwe person zawierający klucz name i jego wartość 'Iza'

const person4b = {
  name: "Iza",
};

// c) obiekt o nazwe personDetails zawierający dane o osobie jak name, lastName, age, drivingLicence
// gdzie ten ostatni powinien być booleanem, w zależności od tego czy osoba ma prawo jazdy czy nie

const personDetails = {
  name: "Adam",
  lastName: "Dec",
  age: 33,
  drivingLicence: true,
};

// d) z obiektu personDetails zrób consol.log samego wieku

console.log(personDetails.age, "wyświetla wiek z obiektu personDetails.age");

// e) zrób console.log całego obiektu

console.log(personDetails, "cały obiekt personDetails");

// f) stwórz obiekt, który zawiera marke, kolor, rok produkcji auta oraz tablicę z
// latami w których samochód był sprzedany innemu właścicielowi, możesz wpisać dowolny
// 3 daty zawierające tylko rok, chodzi tutaj o dodanie tablicy wewnątrz obiektu

const cars = {
  brand: "Opel",
  color: "red",
  yearOfProduction: 2000,
  sold: [2010, 2015, 2020],
};
console.log(cars.sold[1]);
console.log(cars.sold, "sold");
// lub //
const { brand, color, yearOfProduction, sold } = cars;
console.log(sold[2], "sold");

// 6. Warunki i zmienne:

// a) Podaj przykład i różnice między typem wartościowym, a referencyjnym? Czyli czym
// różnią się zmienne proste od złożonych?

console.log("typ prosty wskazuje na wartość ");

let complex = 10;
let complexType = complex;
complex = 20;
console.log(complex);
console.log(complexType);

console.log("typ złożony wskazuje na adres gdzie znajduje się wartość ");

const tabA = [1, 2, 3];
const tabB = tabA;
tabA.push(4);

console.log(tabA, "tabA");
console.log(tabB, "tabB");

// b) Stwórz obiekt person zawierający dane takie jak imie, nazwisko, wiek, posiadanie prawa
// jazdy(true lub false) oraz czy osoba jest pijana(rowniez true false), następnie
// stwórz instrukcje warunkową która w zależnosci od tego jakie dane będą w zmiennych
// wypisze nam czy dana osoba może jechać autem czy nie, weź pod uwage wszystkie aspekty
// jak wiek, bycie pijanym oraz posiadanie prawa jazdy,

const person = {
  name1: "Adam",
  lastName1: "Kowalski",
  age1: 18,
  drivingLicense1: true,
  isDrunk1: false,
};
const { name1, lastName1, age1, drivingLicense1, isDrunk1 } = person;

if (age1 >= 18 && drivingLicense1 == true && isDrunk1 == false) {
  console.log("możesz jechać");
} else console.log("STOP");

// c) Znasz sposób jak zdestrukturyzować obiekt tak aby móc w bardzo łatwy sposób
// użyć kluczy w nim zawartych, np. majac obiekt:
const car = {
  name2: "mustang",
  productionYear: 2020,
  color2: "red",
};
const { name2, productionYear, color2 } = car;
// Chciałbym utworzyć następującą zmienną:
const result = `Moje auto to ${name2} i zostało wyprodukowane w roku ${productionYear}`;
// Jak zrobić aby taka zmienna wyświetliła poprawne dane z obiektu, nie zmieniając treści zmiennej?
console.log(result);

// d) Skróć zapis kodu jak najbardziej się da bez usuwania zmiennej isAdult
// (zrób to na dwa sposoby, bez użycia ternary operatora i z uzyciem):

const isAdult = true

// if(isAdult === true) {
//   return 'Możesz kupić alkohol
// } else if(isAdult === false) {
// return 'Nie możesz kupić alkoholu, jesteś nieletni!'}//

// Jakim cudem może być return w instrukcji ? ? 

// v1. 
if(isAdult){
  console.log(' jesteś pełnoletni')
}

// v 2
console.log(isAdult === true ? `Możesz kupić alkohol` : `Nie możesz kupić alkoholu, jesteś nieletni!`)

// skrócona versja zapisu to ...  ( isAdult ? `asas` : 'asdasd` )