 /*Se desea llevar un control de los préstamos que
 realiza una oficina. Se tiene por cada préstamo: nombre
 del cliente, código del préstamo, monto y cantidad de
 meses. Se requiere de un programa que permita el
 registro de esta información, conociendo al principio de
 la ejecución el monto disponible para préstamos y el
 porcentaje de comisión mensual que se cobrará.
      Estructuras de datos recomendadas
 *Cl_oficina: montoCaja, porcComisionMensual
 *Cl_prestamo: cliente, codigo, prestamo, meses
       Primeros requerimientos
  *Los datos entrada vienen en un archivo (con import... ver anexo)
  *Monto final disponible
  *Clientes que pidieron por 2 meses
  *Clientes que pidieron el préstamo mínimo */
 import Cl_oficina from "./Cl_oficina.js";
 import Cl_prestamo from "./Cl_prestamo.js";
 import Dt_oficina from "./Dt_oficina.js";
 import Dt_prestamos from "./Dt_prestamos.js";

const oficina = new Cl_oficina(Dt_oficina);

Dt_prestamos.forEach((prestamo) => oficina.agregarPrestamo(new Cl_prestamo(prestamo.cliente, prestamo.codigo, prestamo.prestamo, prestamo.meses)));

let agregarPrestamo = (oficina, salida) =>{
    let cliente = prompt("Ingrese el nombre del cliente")
    let codigo = prompt("Ingrese el codigo del cliente")
    let prestamo = prompt("Indique el monto del prestamo")
    let meses = prompt("Indique el tiempo del prestamo (meses)")
    oficina.agregarPrestamo(new Cl_prestamo(cliente, codigo, prestamo, meses))
    salida.innerHTML = `<br>Se agrego con exito el prestamo`;
}
let eliminarPrestamo = (oficina, salida) =>{
    let codigo = prompt("Indique el codigo del prestamo a eliminar");
    if(oficina.eliminarPrestamo(codigo)){
        salida.innerHTML = `<br>Se elimino el prestamo exitosamente`;
    }
    else{
        salida.innerHTML = `<br>El prestamo ${codigo} no existe`;
    }
}
let modPrestamo = (oficina, salida) =>{
    let codigo = prompt("Indique el codigo del prestamo a modificar");
    let cliente = prompt("Indique el NUEVO nombre del cliente");
    let prestamo = prompt("Indique el NUEVO monto del prestamo");
    let meses = prompt("Indique el NUEVO tiempo del prestamo");
    if(oficina.modificarPrestamo(codigo, cliente, prestamo, meses)){
        salida.innerHTML = `<br>Se modifico el prestamo exitosamente`;
    }    
    else{
        salida.innerHTML = `<br>No existe el prestamo`;
    }
}
let listaPrestamos = (oficina, salida) =>{
//    salida.innerHTML = ``
//    oficina.prestamos.forEach((prestamos) =>{
//        salida.innerHTML += `<br>${prestamos.codigo}     ${prestamos.cliente}      ${prestamos.prestamo}     ${prestamos.meses} `
//    })
let prestamos = oficina.prestamos
let salidaTmp = `<br><br>
<br>
<table>
  <tr>
    <th>id</th>
    <th>nombre</th>
    <th>costo</th>
    <th>pvp</th>
  </tr>`;
prestamos.forEach((prestamos) => {
  salidaTmp += `
  <tr>
    <td>${prestamos.codigo}</td>
    <td>${prestamos.cliente}</td>
    <td>${prestamos.prestamo}</td>
    <td>${prestamos.meses}</td>
  </tr>`;
});
salidaTmp += "</table>";

salida.innerHTML = salidaTmp;
}
let montoFinal = (oficina,salida) =>{
    salida.innerHTML = `<br>El monto disponible en caja es de: ${oficina.montFinalDisponible()}`
}
let clientesPrestamos2Meses = (oficina, salida) =>{
    salida.innerHTML = `<br>Los clientes que tienen prestamos de 2 meses son:`;
    let clientes = oficina.clientesPrestamos2Meses();
//    clientes.forEach((cliente) => {
//    salida.innerHTML += `<br>${cliente.codigo}     ${cliente.cliente}      ${cliente.prestamo}     ${cliente.meses}`
//})
let salidaTmp = `<br>
<br>
<table>
  <tr>
    <th>id</th>
    <th>nombre</th>
    <th>costo</th>
    <th>pvp</th>
  </tr>`;
clientes.forEach((clientes) => {
  salidaTmp += `
  <tr>
    <td>${clientes.codigo}</td>
    <td>${clientes.cliente}</td>
    <td>${clientes.prestamo}</td>
    <td>${clientes.meses}</td>
  </tr>`;
});
salidaTmp += "</table>";

salida.innerHTML += salidaTmp;
}
let clientesPrestamosMinimos = (oficina, salida) =>{
    let clientes = oficina.clientesPrestamoMinimo();
    salida.innerHTML = `<br>Los clientes con prestamos minimos son: `;
//    prestamos.forEach((prestamos) => {
//        salida.innerHTML += `<br>${prestamos.codigo} ${prestamos.cliente} ${prestamos.prestamo} ${prestamos.meses}`
//    })
    let salidaTmp = `<br>
<br>
<table>
  <tr>
    <th>id</th>
    <th>nombre</th>
    <th>costo</th>
    <th>pvp</th>
  </tr>`;
clientes.forEach((clientes) => {
  salidaTmp += `
  <tr>
    <td>${clientes.codigo}</td>
    <td>${clientes.cliente}</td>
    <td>${clientes.prestamo}</td>
    <td>${clientes.meses}</td>
  </tr>`;
});
salidaTmp += "</table>";

salida.innerHTML += salidaTmp;
}
let salida1 = document.getElementById("salida1"),
  salida2 = document.getElementById("salida2"),
  opciones = document.getElementById("opciones");

salida1.innerHTML =`<br>seleccione su opción:
    <br>1= Agregar prestamo
    <br>2= Eliminar prestamo
    <br>3= Modificar prestamo
    <br>4= Mostrar lista de prestamo
    <br>5= Monto final disponible en caja
    <br>6= Clientes que pidieron prestamos por 2 meses
    <br>7= Clientes que pidieron el prestamo minimo`;

opciones.onclick = () => {
    let opcion = +prompt("seleccione una opción");
    switch(opcion){
        case 1: 
            agregarPrestamo(oficina,salida2);
            break;
        case 2:
            eliminarPrestamo(oficina,salida2);
            break;
        case 3:
            modPrestamo(oficina,salida2);
            break;
        case 4:
            listaPrestamos(oficina, salida2);
            break;
        case 5:
            montoFinal(oficina,salida2);
            break;
        case 6:
            clientesPrestamos2Meses(oficina,salida2);
            break;
        case 7:
            clientesPrestamosMinimos(oficina,salida2);
            break;
    }
}