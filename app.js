//Challenged amigo secreto
let amigo = [];

function agregarAmigo (){
    let inputAmigo = document.getElementById("amigo") //Para obtener lo digitado en el campo de texto
    let nombreAmigo = inputAmigo.value; // añadir

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
function sortearAmigo(){
    if(amigo.length === 0){
        alert ("No hay amigos para sortear");
        return;
    }
        let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)]
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `El amigo ganador es ${amigoSorteado}`;

        let limpiarLista = document.getElementById("listaAmigos");
        limpiarLista.innerHTML = "";
}
