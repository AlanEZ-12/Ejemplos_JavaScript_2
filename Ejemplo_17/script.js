function saludar(saludarFuncion) {
    saludarFuncion();
}

const saludoInernacional = function() {
    console.log('Hola mundo');
}

const saludoMexicano = () => {
    console.log('Quihubole');
}

saludar(saludoInernacional);
saludar(saludoMexicano);