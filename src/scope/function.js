function greeting() {
    let userName = 'Manu'; //solo esta en la funcion, por fuera no es posible 
    console.log(userName);

    if(userName === 'Manu') {
        console.log(`Hello ${userName}!`)
    }
}
greeting();
console.log(userName); //no se puede acceder porque no existe una referencia 