function nombreDeLaFuncion(parametro1, parametro2) {
    const valorConDescuento = (parametro1 * parametro2) / 100;

    const  valorTotal = parametro1 - valorConDescuento;
    return valorTotal;
}

const valorPrenda = 1000;
const valorDescuento = 15;

const valorFinal = nombreDeLaFuncion(valorPrenda, valorDescuento);
console.log("El precio con descuento es: ", valorFinal);