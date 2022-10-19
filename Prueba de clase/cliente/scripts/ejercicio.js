let socket = io("ws://localhost:3000");

//Al ocurrir un mensaje nuevo. (Revise el evento 'new' emitido por el servidor en servidor/index.js)
socket.on('new', (data) => {
    let voto = data.value
    console.log(voto)
    document.querySelector('.candidatos').innerHTML =
        `<ul>
         <li>Candidato 1: </li>
         <div class="c1">
             <p>${voto}</p>
         </div>
         <li>Candidato 2: </li>
         <div class="c2">
             <p>${voto}</p>
         </div>
         <li>Candidato 3: </li>
         <div class="c3">
             <p>${voto}</p>
         </div>
         </ul>`

})