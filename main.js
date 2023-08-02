//Mini Programa que crea clientes de netflix 

// Cliente

class Cliente {
    constructor(nombre, apellido, dni, cuenta){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.cuenta = cuenta;
    }
}

const clienteAndrea = new Cliente("Andrea", "Portela", 25556614, "Premiun")
const clienteNicolas = new Cliente("Nicolas", "Fulgenzi", 45692952, "Basic")
const clienteLucas = new Cliente("Lucas", "Marochi", 45692918, "Basic")

const arrayClientes = [clienteAndrea, clienteNicolas, clienteLucas]
console.log(arrayClientes)

// Funcion (Menú de opciones)

function menu(){
    alert("Bienvenido al creador auntomatico de clientes de Netflix!!! ");
    let opcion = parseInt(prompt("Ingrese una opcion: 1)Alta de Cliente   2)Baja de Cliente   3)Modificacion de Cliente   4)Consulta de Cliente   5)Salir"));
    return opcion;
}

// Funcion para dar de alta a un cliente

function altaCliente() {
    let nombre = prompt("Ingrese el Nombre del cliente: ");
    let apellido = prompt("Ingrese el Apellido del cliente: ");
    let dni = prompt("Ingrese el DNI del cliente: ");
    let cuenta = prompt("Ingrese el tipo de cuenta que desea: ");
    let cliente = new Cliente (nombre, apellido, dni, cuenta);
    arrayClientes.push(cliente);
    console.log(arrayClientes);
}

// Funcion para dar de baja a un cliente

function bajaCliente(){
    let dni = parseInt(prompt("Ingrese el DNI del clinte: "));
    let cliente = arrayClientes.find(cliente => cliente.dni === dni);
    let indice = arrayClientes.indexOf(cliente);
    arrayClientes.splice(indice,1);
    console.log(arrayClientes);
}

// Funcion para modificar datos de un cliente

function modificacionCliente(){
    let dni = parseInt(prompt("Ingrese el DNI del clinte: "));
    let cliente = arrayClientes.find(cliente => cliente.dni === dni);
    let indice = arrayClientes.indexOf(cliente);

    let nombre = prompt("Ingrese el nombre del cliente: ");
    let apellido = prompt("Ingrese el apellido del cliente: ");
    let cuenta = parseInt(prompt("Ingrese el tipo de cuenta que desea: "));
    let clienteModificado = new Cliente (nombre, apellido, dni, cuenta)

    arrayClientes.splice(indice, 1, clienteModificado);
    console.log(arrayClientes);
}

// Funcion para consultar un cliente

function consultaCliente() {
    let dni = parseInt(prompt("Ingrese el DNI del clinte: "));
    let cliente = arrayClientes.find(cliente => cliente.dni === dni);
    console.log(cliente);
}

// Funcion para salir del programa

function salir() {
    alert("Usted salió del programa, nos vemos.")
}

// Ejecutando el programa

let opcion = menu();

switch(opcion){
    case 1:
        altaCliente();
        break;
    case 2:
        bajaCliente();
        break;
    case 3:
        modificacionCliente();
        break;
    case 4:
        consultaCliente();
        break
    case 5:
        salir();
        break
    default:
        alert("Vuelva a seleccionar una opción")
        break;
}