const URL = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits?per_page=100'

const esperar = (ms) => new Promise(resolve => setTimeout(resolve, ms))

let peticion = async(event) => {
    let respuesta = await fetch(URL);
    let data = await respuesta.json()

    //Llame a la función esperar, con:
    //   await esperar(5000);
    /*Inicio*/
    await esperar(5000);
    /*Fin*/

    document.getElementById("respuesta2").innerHTML = data.length + ' registros';


}

window.onload = function() {

    //Demora en la respuesta
    document.getElementById('cargar2').addEventListener('click', peticion)


}