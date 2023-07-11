alert("Calcule los promedios de su aula")
const usuarioHabilitado = "profesor"
const contraseniaHabilitada = "contraseña"

let usuario = prompt("Ingrese su usuario");
let contrasenia = prompt("Ingrese su contraseña")

if(usuario === usuarioHabilitado && contrasenia === contraseniaHabilitada){
    alert ("Bienvenido " + usuario)

    let cantidadAlumnos = parseInt(prompt("Ingrese la cantidad de estudiantes a los que quiera calcular el promedio"))

    for(let i = 0 ; i < cantidadAlumnos ; i++){

        let nombreEstudiante = prompt("Ingrese el nombre del alumno");
        let nota1 = parseInt(prompt("Ingrese la primera nota"));
        let nota2 = parseInt(prompt("Ingrese la segunda nota"));
        let nota3 = parseInt(prompt("Ingrese la tercera nota"));
        let promedio = calcularPromedio(nota1, nota2, nota3);
        alert("El promedio de " + nombreEstudiante + " es " + promedio);

        let aprueba = apruebaAnio(promedio)

        if(aprueba){
            alert (nombreEstudiante + " aprueba el año");
        } else{
            alert (nombreEstudiante + " no aprueba el año")
        }
    }
} else{
    alert("Usuario o contraseña incorrecta. Intente de nuevo")
}


//Funciones 


function calcularPromedio(nota1, nota2, nota3){
    let promedio = (nota1 + nota2 + nota3)/ 3;
    return promedio;
}

function apruebaAnio(promedio){
    if(promedio >= 6){
        return true;
    } else {
        return false;
    }
}