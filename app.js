let salarioMensual;
let gastosFijos = 0;
let gastosVariables = [];

function ingresarSalario() {
    salarioMensual = parseFloat(prompt("Ingrese su salario mensual:"));
    if (isNaN(salarioMensual)) {
        alert("Por favor, ingrese un valor válido.");
        ingresarSalario();
    }
}

function ingresarGastosFijos() {
    gastosFijos = parseFloat(prompt("Ingrese el total de sus gastos fijos:"));
    if (isNaN(gastosFijos)) {
        alert("Por favor, ingrese un valor válido.");
        ingresarGastosFijos();
    }
}

function agregarGastoVariable() {
    let descripcion = prompt("Ingrese la descripción del gasto variable:");
    let monto = parseFloat(prompt("Ingrese el monto del gasto variable:"));
    if (isNaN(monto)) {
        alert("Por favor, ingrese un valor válido.");
        agregarGastoVariable();
    } else {
        gastosVariables.push({ descripcion, monto });
        if (confirm("¿Desea agregar otro gasto variable?")) {
            agregarGastoVariable();
        }
    }
}

function mostrarResumen() {
    let totalGastosVariables = gastosVariables.reduce((total, gasto) => total + gasto.monto, 0);
    let totalGastos = gastosFijos + totalGastosVariables;
    let saldo = salarioMensual - totalGastos;
    
    let resumen = `
    Resumen de Gastos Mensuales:
    Gastos Fijos: ${gastosFijos}
    Gastos Variables: ${totalGastosVariables}
    -------------------------------
    Total Gastos: ${totalGastos}
    Saldo: ${saldo}
    Salario Mensual: ${salarioMensual}
    `;
    
    alert(resumen);
}

// Función principal
function calculadoraGastosMensuales() {
    ingresarSalario();
    ingresarGastosFijos();
    agregarGastoVariable();
    if (confirm("¿Desea ver el resumen de su saldo?")) {
        mostrarResumen();
    }
}

// Ejecutar la calculadora
calculadoraGastosMensuales();
