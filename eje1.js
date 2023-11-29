// estaEnRango(valor, minimo, maximo)
// Crear una función estaEnRango que tome como argumentos tres números, un valor, un número minimo y un número maximo, y devuelva true si el valor se encuentra entre los números minimo y maximo o false si no (si el valor es igual a uno de los extremos se considera que está dentro del rango)

function estaEnRango (valor,minimo,maximo) {
    // si el valor es mayor a max, entonces esta fuera del rango 
    if (valor>maximo) {
        return false;
    // sino, si el valor es menor a min, entonces esta fuera del rango    
    } else if (valor<minimo) {
        return false;
   // entonces esta dentro del rango      
    } else {
        return true;
    }
};

function estaEnRango2 (valor, minimo, maximo) {
    // valor más grande que minimo
    // y  --> && --> and
    // valor mas chico que maximo
    if (valor>=minimo && valor<=maximo) {
        return true;
    } else {
        return false;
    }
}


//  || --> o --> or


console.log(estaEnRango2(3, 1, 10))   // true
console.log(estaEnRango2(1, 1, 10))   // true
console.log(estaEnRango2(10, 1, 10))  // true
console.log(estaEnRango2(12, 1, 10))  // false
console.log(estaEnRango2(-3, 1, 10))  // false