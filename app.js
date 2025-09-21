let listaDeAmigos = [];

// Agregar amigo
function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("⚠️ Por favor, escribe un nombre válido.");
    return;
  }

  // Verificar si ya existe en la lista
  if (listaDeAmigos.includes(nombre)) {
    alert(`⚠️ El nombre "${nombre}" ya está en la lista.`);
    input.value = "";
    return;
  }

  listaDeAmigos.push(nombre);
  mostrarLista();
  input.value = "";
}

// Mostrar lista en pantalla
function mostrarLista() {
  const ul = document.getElementById("listaAmigos");
  ul.innerHTML = "";

  listaDeAmigos.forEach((nombre) => {
    const li = document.createElement("li");
    li.textContent = nombre;
    ul.appendChild(li);
  });
}

// Sorteo de un solo amigo secreto
function sortearAmigo() {
  if (listaDeAmigos.length < 2) {
    alert("⚠️ Necesitas al menos dos amigos para hacer el sorteo.");
    return;
  }

  // Seleccionar un índice aleatorio
  const indice = Math.floor(Math.random() * listaDeAmigos.length);
  const amigoSecreto = listaDeAmigos[indice];

  // Mostrar resultado
  const ulResultado = document.getElementById("resultado");
  ulResultado.innerHTML = "";
  const li = document.createElement("li");
  li.textContent = `🎉 Tu amigo secreto es: ${amigoSecreto}`;
  ulResultado.appendChild(li);
}

// Reiniciar juego
function reiniciarJuego() {
  listaDeAmigos = [];
  document.getElementById("amigo").value = "";
  document.getElementById("listaAmigos").innerHTML = "";
  document.getElementById("resultado").innerHTML = "";
}


