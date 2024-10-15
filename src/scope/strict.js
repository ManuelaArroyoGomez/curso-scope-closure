// var pi; //undefinder lo que pudo interpretar js
'use strict' //uso avanzado de js, se debe asignar y declarar
pi = 3.1416; //asignar sin declarar
console.log(pi);

function myFunction(){
    return pi = 3.1416;
}

console.log(myFunction());