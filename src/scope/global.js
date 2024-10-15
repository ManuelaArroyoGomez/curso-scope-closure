// Variables
var a; //declarando
var b = 'b'; //declaramos y asignamos 
b = 'bb'; //reasignacion 
var a = 'aa'; //redeclaracion

// Global Scope
var fruit = 'apple'; //global
console.log(fruit);

function bestfuit() {
    console.log(fruit);
}
bestfuit();

function countries() {
    country = "Colombia"; // aqui declaramos como global
    console.log(countries);
}
countries();
console.log(countries);