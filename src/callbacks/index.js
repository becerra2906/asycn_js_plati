// 

function sum(num1,num2){
    return num1 + num2;
}

function calc(num1, num2, callback){
 return callback(num1,num2);
}

console.log(calc(2,2,sum));


// primero defino la función que genera la fecha.

//en esta función estoy generandoo una nueva fecha,
//estoy generando un timeout para el callback que debe ejecutarse 3segs después
function date(callback){
    console.log(new Date);
    setTimeout(function(){
let date = new Date; 
callback(date);
    },3000);
}

//acá generé esta función para imprimir esa fecha

function printDate (dateNow){
    console.log(dateNow);
}

// acá llamo la función de fecha, con la función de imprimir fecha como parametro para que cuando reciba el resultado de la primera función y su callback, imprima la fecha

date(printDate());