//Switch
let expre = "papa";
switch (expre){
    case "naranjas":
        console.log("Las naranjas cuestan $0.59 el kilo.");
        break;
    case "manzanas":
        console.log("Las manzanas cuestan $2.32 el kilo.");
        break;
    default:
        console.log("No es una fruta");
    break;
}

//While
let contador = 0;
while (contador < 10){
    console.log(contador);
    contador ++;
}

//do-while
let counter = 0;
do{
    console.log(counter);
    counter++;
}while(counter < 10);

//For
let frutas = ['naranja', 'pera', 'chontaduro', 'limón'];
for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}

//For-in - Se usa para objetos
const listaDeCompras = {
    yuca: 5,
    arracacha: 23,
    papa: 34,
    arroz:43
}
for (lista1 in listaDeCompras){
    console.log(lista1);
}
//concatena el string con el valor de la propiedad
for (lista1 in listaDeCompras){
    console.log(`${lista1}: ${listaDeCompras[lista1]}`); //imprime el nombre de la propiedad y el valor de la propiedad
}

//For-of - Se usa para arreglos
listaDeCompras1 = ['papa', 'yuca', 'arracacha', 'manzana'];
for (lista2 of listaDeCompras1){
    console.log(lista2);
}