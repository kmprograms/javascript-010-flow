// @flow

// --------------------------------------------------------------------------------
// INSTALACJA
// >> npm install --save-dev @babel/preset-flow
// >> npm install --save-dev flow-bin

// .babelrc
// {
//   "presets": ["@babel/preset-flow"]
// }

// package.json
// "scripts": {
//  "flow": "flow"
// }

// Pierwsze uruchomienie
// >> npm run flow init

// Za kolejnym razem:
// >> npm run flow

// Praca z CLI
// https://flow.org/en/docs/cli/

// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// TYPE ANNOTATIONS
// --------------------------------------------------------------------------------

// PRZYKLAD 1
// Mozemy stosowac ograniczenia zarowno dla typow prymitywnych jak i ich
// obiektowych odpowiednikow
function add(a: string, b: string) {
    return a + b;
}

console.log(add("A", "B")); // Error
// console.log(add(10, 20)); // Error


// PRZYKLAD 2
// Od tej pory konkatenacja nastepuje tylko kiedy dodajemy string lub number
const r1 = "a" + 10;
const r2 = "a" + "b";
// const r3 = "a" + {};  // Error - jedyne wyjscie to przekonwertowac obiekt
// na napis np za pomoca toString()

// PRZYKLAD 3
// Maybe types
// Bez argumentu albo null, undefined lub void
function maybe(x: ?string) {}
maybe();
maybe(null);
maybe(undefined);
maybe('a');

// PRZYKLAD 4
// Opcjonalne wlasciwosci obiektow
// Nie akceptuje null
function testObject(value: {prop?: string}) {}
testObject({});
testObject({prop: undefined});
testObject({prop: 'ccc'});
// testObject({prop: null}); // Error

// PRZYKLAD 5
// Parametry opcjonalne dla funkcji
// Zwroc uwage na pozycje znaku ? w stosunku do wczesniejszych przykladow
// Nie akceptuje null
function testOptionalParams(value?: string) {}
testOptionalParams("");
testOptionalParams(undefined);
testOptionalParams();
// testOptionalParams(null); // Error

// Mozemy tez zastosowac wartosci domyslne
function testOptionalParamsWithDefaults(value: string = 'def') {}
testOptionalParamsWithDefaults(undefined)
testOptionalParamsWithDefaults("")
testOptionalParamsWithDefaults()
// testOptionalParamsWithDefaults(null); // Error

// https://flow.org/en/docs/types/

