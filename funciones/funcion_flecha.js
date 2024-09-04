const variableQueNoCambia = function(nombre){
    return `Hola, ${nombre}`
}

const nombreDeVariableQueNoCambia = (nombre) =>{
    return `Hola,  ${nombre}`
}

const personajeDeReparto = {
    nombre1: "Tío Ben",
    mensajeConFuncionTradicional: function(mensaje){
        console.log(`${this.nombre1} dice: ${mensaje}`);
    },
    mensajeConFuncionFlecha: (mensaje) => {
        console.log(`${this.nombre1} dice: ${mensaje}`);
    },
};

personajeDeReparto.mensajeConFuncionFlecha("Un gran poder, conlleva una gran responsabilidad");
personajeDeReparto.mensajeConFuncionTradicional("Un gran poder, conlleva una gran responsabilidad");