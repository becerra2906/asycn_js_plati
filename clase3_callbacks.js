// estructura de un callback

// un callback es una función que tiene como parametro otra función
// esta segunda función se va a ejecutar cuando se termine el llamado asincrono que haga la primera.

// en este caso yo podría crear otras funciones de diferentes operaciones para que sean parte de la calculadora y utilizarlas como callback

function sum(num1,num2){
    return num1 + num2;
}

function calc(num1, num2, callback){
 return callback(num1,num2);
}

console.log(calc(2,2,sum));

