let socket = io("ws://localhost:3000");

//Arreglo vacío
/* Inicio */
let registros = []
    /* Fin */


//Al ocurrir un mensaje nuevo. (Revise el evento 'new' emitido por el servidor en servidor/index.js)
socket.on('new', (data) => {


    //Agregue data al final del arreglo registros, con push 
    /* Inicio */
    registros.push(data)
        /* Fin */


    let plantillaRow = ``


    for (var i = 0; i < registros.length - 1; i++) {

        //Guarde el i-ésimo elemento en la variable inicio 
        /* Inicio */
        let inicio = registros[i]
            /* Fin */


        //Guarde el i+1-ésimo elemento en la variable fin 
        /* Inicio */
        let fin = registros[i + 1]
            /* Fin */



        //Complete la plantilla con las variables inicio.data, fin.data y fin.data
        /* Inicio */
        plantillaRow += `
            <tr>
                <td style="--start: ${inicio.value}; --size: ${fin.value}"> <span class="data"> ${fin.value} </span> </td>
            </tr>
        `
            /* Fin */

    }



    document.getElementsByTagName('tbody')[0].innerHTML = `<tbody>` + plantillaRow + `</tbody>`


    //Cuando la longitud del arreglo sea mayor que 20, entonces
    //Elimine el valor del frente del arreglo registros, con shift
    /* Inicio */
    if (registros.length > 20) {
        registros.shift()
    }

    /* Fin */


})