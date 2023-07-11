alert("Calcule las faltas de los estudiantes")
const usuarioHabilitado = "profesor"
const contraseniaHabilitada = "contraseña"

let usuario = prompt("Ingrese su usuario");
let contrasenia = prompt("Ingrese su contraseña")

if(usuario === usuarioHabilitado && contrasenia === contraseniaHabilitada){
    alert ("Bienvenido " + usuario)

    let cantidadAlumnos = parseInt(prompt("Ingrese la cantidad de estudiantes que quiera saber sus faltas"))

    for(let i = 0 ; i < cantidadAlumnos ; i++){

        let nombreEstudiante = prompt("Ingrese el nombre del alumno");
        let falta1 = parseInt(prompt("Ingrese las faltas del primer trimestre"));
        let falta2 = parseInt(prompt("Ingrese las faltas del segundo trimestre"));
        let falta3 = parseInt(prompt("Ingrese las faltas del tercer trimestre"));
        let faltas = calcularFaltas(falta1, falta2, falta3);
        alert("Las falatas de " + nombreEstudiante + " son " + faltas);

        let total = totalFaltas(faltas)

        if(total){
            alert (nombreEstudiante + " es regular");
        } else{
            alert (nombreEstudiante + " quedo libre")
        }
    }
} else{
    alert("Usuario o contraseña incorrecta. Intente de nuevo")
}


//Funciones 


function calcularFaltas(falta1, falta2, falta3){
    let faltas = (falta1 + falta2 + falta3);
    return faltas;
}

function totalFaltas(faltas){
    if(faltas <= 15){
        return true;
    } else {
        return false;
    }
}