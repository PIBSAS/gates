// Función para inicializar los estados de las compuertas
function initializeGates() {
    // Establecer estado inicial de las compuertas
    // XNOR
    document.getElementById('#out1').classList.remove('off');
    document.getElementById('#out1').classList.add('on');
    
    // Repite para otras compuertas si es necesario
}

// Llama a la función de inicialización al cargar la página
window.onload = function() {
    initializeGates();
};

function toggleOutputState(componentId, switchId) {
    // Obtener el componente principal por su ID
    var component = document.getElementById(componentId);
    
    // Obtener el elemento hijo específico dentro del componente principal
    var switchElement = component.querySelector('#' + switchId);
    
    // Alternar el valor del atributo data-out entre "0" y "1"
    if (switchElement.dataset.out === "0") {
        switchElement.dataset.out = "1";
    } else {
        switchElement.dataset.out = "0";
    }
}

// Comppuerta AND
function simulateANDGate(componentId) {
    // Obtener el componente principal por su ID
    var component = document.getElementById(componentId);
    
    // Obtener los interruptores de entrada S1 y S2
    var switch1 = component.querySelector('#S1');
    var switch2 = component.querySelector('#S2');
    
    // Obtener el elemento de salida (LED)
    var output = component.querySelector('#out1');

    // Obtener la tabla de verdad de la compuerta AND
    var truthTable = document.getElementById("Tand");

    // Restablecer el estilo de todas las filas de la tabla
    for (var i = 0; i < truthTable.rows.length; i++) {
        truthTable.rows[i].style = "";
    }

    // Calcular el índice de la fila correspondiente en la tabla de verdad
    var rowIndex = (Number(switch1.dataset.out) * 2) + Number(switch2.dataset.out) + 1;

    // Resaltar la fila correspondiente en la tabla de verdad
    truthTable.rows[rowIndex].style.backgroundColor = "#FD6F1D";

    // Simular el comportamiento de la compuerta AND: salida activa solo si ambas entradas son 1
    if (switch1.dataset.out == "1" && switch2.dataset.out == "1") {
        output.className = "led on";
    } else {
        output.className = "led off";
    }
}

// Comppuerta OR
function simulateORGate(componentId) {
    // Obtener el componente principal por su ID
    var component = document.getElementById(componentId);
    
    // Obtener los interruptores de entrada S1 y S2
    var switch1 = component.querySelector('#S1');
    var switch2 = component.querySelector('#S2');
    
    // Obtener el elemento de salida (LED)
    var output = component.querySelector('#out1');

    // Obtener la tabla de verdad de la compuerta OR
    var truthTable = document.getElementById("Tor");

    // Restablecer el estilo de todas las filas de la tabla
    for (var i = 0; i < truthTable.rows.length; i++) {
        truthTable.rows[i].style = "";
    }

    // Calcular el índice de la fila correspondiente en la tabla de verdad
    var rowIndex = (Number(switch1.dataset.out) * 2) + Number(switch2.dataset.out) + 1;

    // Resaltar la fila correspondiente en la tabla de verdad
    truthTable.rows[rowIndex].style.backgroundColor = "#FD6F1D";

    // Simular el comportamiento de la compuerta OR: salida activa si al menos una entrada es 1
    if (switch1.dataset.out === "1" || switch2.dataset.out === "1") {
        output.className = "led on";
    } else {
        output.className = "led off";
    }
}

// Compuerta NOT
function simulateNOTGate(componentId) {
    // Obtener el componente principal por su ID
    var component = document.getElementById(componentId);
    
    // Obtener el interruptor de entrada S1
    var switch1 = component.querySelector('#S1');
    
    // Obtener el elemento de salida (LED)
    var output = component.querySelector('#out1');

    // Obtener la tabla de verdad de la compuerta NOT
    var truthTable = document.getElementById("Tnot");

    // Restablecer el estilo de todas las filas de la tabla
    for (var i = 0; i < truthTable.rows.length; i++) {
        truthTable.rows[i].style = "";
    }

    // Calcular el índice de la fila correspondiente en la tabla de verdad
    var rowIndex = Number(switch1.dataset.out) + 1;

    // Resaltar la fila correspondiente en la tabla de verdad
    truthTable.rows[rowIndex].style.backgroundColor = "#FD6F1D";

    // Simular el comportamiento de la compuerta NOT: invertir el valor de la entrada
    if (switch1.dataset.out != "1") {
        output.className = "led on";
    } else {
        output.className = "led off";
    }
}

// Compuerta IF o BUFFER
function simulateIFGate(componentId) {
    // Obtener el componente principal por su ID
    var component = document.getElementById(componentId);
    
    // Obtener el interruptor de entrada S1
    var switch1 = component.querySelector('#S1');
    
    // Obtener el elemento de salida (LED)
    var output = component.querySelector('#out1');

    // Obtener la tabla de verdad de la compuerta IF
    var truthTable = document.getElementById("Tif");

    // Restablecer el estilo de todas las filas de la tabla
    for (var i = 0; i < truthTable.rows.length; i++) {
        truthTable.rows[i].style = "";
    }

    // Calcular el índice de la fila correspondiente en la tabla de verdad
    var rowIndex = Number(switch1.dataset.out) + 1;

    // Resaltar la fila correspondiente en la tabla de verdad
    truthTable.rows[rowIndex].style.backgroundColor = "#FD6F1D";

    // Simular el comportamiento de la compuerta IF: salida activa solo si la entrada es 1
    if (switch1.dataset.out != "1") {
        output.className = "led off"; 
    } else {
        output.className = "led on";
    }
}

// Compuerta NAND
function simulateNANDGate(componentId) {
    // Obtener el componente principal por su ID
    var component = document.getElementById(componentId);
    
    // Obtener los interruptores de entrada S1 y S2
    var switch1 = component.querySelector('#S1');
    var switch2 = component.querySelector('#S2');
    
    // Obtener el elemento de salida (LED)
    var output = component.querySelector('#out1');

    // Obtener la tabla de verdad de la compuerta NAND
    var truthTable = document.getElementById("Tnand");

    // Restablecer el estilo de todas las filas de la tabla
    for (var i = 0; i < truthTable.rows.length; i++) {
        truthTable.rows[i].style = "";
    }

    // Calcular el índice de la fila correspondiente en la tabla de verdad
    var rowIndex = (Number(switch1.dataset.out) * 2) + Number(switch2.dataset.out) + 1;

    // Resaltar la fila correspondiente en la tabla de verdad
    truthTable.rows[rowIndex].style.backgroundColor = "#FD6F1D";

    // Simular el comportamiento de la compuerta NAND: salida activa si no ambas entradas son 1
    if (switch1.dataset.out === "1" && switch2.dataset.out === "1") {
        output.className = "led off"; // Si ambas entradas son 1, la salida es 0 (LED apagado)
    } else {
        output.className = "led on";  // Si no ambas entradas son 1, la salida es 1 (LED encendido)
    }
}

// Compuerta NOR
function simulateNORGate(componentId) {
    // Obtener el componente principal por su ID
    var component = document.getElementById(componentId);
    
    // Obtener los interruptores de entrada S1 y S2
    var switch1 = component.querySelector('#S1');
    var switch2 = component.querySelector('#S2');
    
    // Obtener el elemento de salida (LED)
    var output = component.querySelector('#out1');

    // Obtener la tabla de verdad de la compuerta NOR
    var truthTable = document.getElementById("Tnor");

    // Restablecer el estilo de todas las filas de la tabla
    for (var i = 0; i < truthTable.rows.length; i++) {
        truthTable.rows[i].style = "";
    }

    // Calcular el índice de la fila correspondiente en la tabla de verdad
    var rowIndex = (Number(switch1.dataset.out) * 2) + Number(switch2.dataset.out) + 1;

    // Resaltar la fila correspondiente en la tabla de verdad
    truthTable.rows[rowIndex].style.backgroundColor = "#FD6F1D";

    // Simular el comportamiento de la compuerta NOR: salida activa solo si ambas entradas son 0
    if (switch1.dataset.out === "1" || switch2.dataset.out === "1") {
        output.className = "led off"; // Si alguna entrada es 1, la salida es 0 (LED apagado)
    } else {
        output.className = "led on";  // Si ambas entradas son 0, la salida es 1 (LED encendido)
    }
}

// Compuerta XOR
function simulateXORGate(componentId) {
    // Obtener el componente principal por su ID
    var component = document.getElementById(componentId);
    
    // Obtener los interruptores de entrada S1 y S2
    var switch1 = component.querySelector('#S1');
    var switch2 = component.querySelector('#S2');
    
    // Obtener el elemento de salida (LED)
    var output = component.querySelector('#out1');
    
    // Obtener los valores de salida de los interruptores
    var output1 = switch1.dataset.out;
    var output2 = switch2.dataset.out;

    // Obtener la tabla de verdad de la compuerta XOR
    var truthTable = document.getElementById("Txor");

    // Restablecer el estilo de todas las filas de la tabla
    for (var i = 0; i < truthTable.rows.length; i++) {
        truthTable.rows[i].style = "";
    }

    // Calcular el índice de la fila correspondiente en la tabla de verdad
    var rowIndex = (Number(output1) * 2) + Number(output2) + 1;

    // Resaltar la fila correspondiente en la tabla de verdad
    truthTable.rows[rowIndex].style.backgroundColor = "#FD6F1D";

    // Simular el comportamiento de la compuerta XOR: salida activa si una y solo una entrada es 1
    if ((output1 === "1" && output2 !== "1") || (output1 !== "1" && output2 === "1")) {
        output.className = "led on"; // Si una entrada es 1 y la otra no, la salida es 1 (LED encendido)
    } else {
        output.className = "led off"; // Si ambas entradas son iguales, la salida es 0 (LED apagado)
    }
}

// Compuerta XNOR
function simulateXNORGate(componentId) {
    // Obtener el componente principal por su ID
    var component = document.getElementById(componentId);
    
    // Obtener los interruptores de entrada S1 y S2
    var switch1 = component.querySelector('#S1');
    var switch2 = component.querySelector('#S2');
    
    // Obtener el elemento de salida (LED)
    var output = component.querySelector('#out1');
    
    // Obtener los valores de salida de los interruptores
    var output1 = switch1.dataset.out;
    var output2 = switch2.dataset.out;

    // Obtener la tabla de verdad de la compuerta XNOR
    var truthTable = document.getElementById("Txnor");

    // Restablecer el estilo de todas las filas de la tabla
    for (var i = 0; i < truthTable.rows.length; i++) {
        truthTable.rows[i].style = "";
    }

    // Calcular el índice de la fila correspondiente en la tabla de verdad
    var rowIndex = (Number(output1) * 2) + Number(output2) + 1;

    // Resaltar la fila correspondiente en la tabla de verdad
    truthTable.rows[rowIndex].style.backgroundColor = "#FD6F1D";

    // Simular el comportamiento de la compuerta XNOR: salida activa si ambas entradas son iguales
    if ((output1 === "1" && output2 === "1") || (output1 !== "1" && output2 !== "1")) {
        output.className = "led on";  // Si ambas entradas son iguales, la salida es 1 (LED encendido)
    } else {
        output.className = "led off"; // Si las entradas son diferentes, la salida es 0 (LED apagado)
    }
}
