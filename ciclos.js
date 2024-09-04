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

//For-in

//For-of