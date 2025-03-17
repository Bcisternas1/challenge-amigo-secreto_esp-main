// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
et amigo = [];

function agregarAmigo (){
    let inputAmigo = document.getElementById("amigo") //Para obtener lo digitado en el campo de texto
    let nombreAmigo = inputAmigo.value; // añadir amigo a la lista

    if(!nombreAmigo){
        alert("Debes ingresar un nombre");// mensaje en caso de no ingresar valor en campo de texto
        return;
    }
    amigo.push(nombreAmigo); //añadir a lista de sorteo
    inputAmigo.value = ""; // Limpiar campo de texto
    inputAmigo.focus(); //limpia campo de texto luego de añadir amigo a la lista
    renderizarAmigos();
}

function renderizarAmigos(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // limpiar lista de amigos

    for(let i = 0; i < amigo.length; i++){
        let item = document.createElement("li");
        item.textContent = amigo[i];
        listaAmigos.appendChild(item)
;    }
}
