// Matriz con las 8 etapas de la destilación textual
const versionesTexto = [
  "El lenguaje, bajo el calor constante de la máquina, comienza a perder sus estructuras más complejas. Las palabras sólidas se derriten lentamente, evaporando adjetivos y conectores secundarios hasta dejar únicamente el núcleo. Lo que al principio parecía un relato denso y lleno de matices, termina reducido a su mínima expresión; una esencia destilada por el tiempo y el zumbido eléctrico. Al final, solo sobrevive lo indispensable.",
  "El lenguaje, bajo el calor de la máquina, pierde sus estructuras complejas. Las palabras se derriten lentamente, evaporando adjetivos hasta dejar únicamente el núcleo. Lo que parecía un relato lleno de matices, termina reducido a su expresión; una esencia destilada por el tiempo. Al final, solo sobrevive lo indispensable.",
  "El lenguaje, bajo el calor, pierde sus estructuras. Las palabras se derriten lentamente, dejando únicamente el núcleo. El relato lleno de matices termina reducido a su expresión; una esencia destilada por el tiempo. Solo sobrevive lo indispensable.",
  "El lenguaje bajo el calor pierde estructuras. Las palabras se derriten, dejando únicamente el núcleo. El relato termina reducido a su expresión destilada. Solo sobrevive lo indispensable.",
  "El lenguaje bajo el calor pierde estructuras. Las palabras se derriten dejando el núcleo. El relato termina reducido. Sobrevive lo indispensable.",
  "El lenguaje pierde estructuras. Las palabras se derriten. El relato termina. Sobrevive lo indispensable.",
  "El lenguaje pierde estructuras. Las palabras se derriten. Sobrevive lo indispensable.",
  "El lenguaje se derrite. Sobrevive lo indispensable."
];

const startBtn = document.getElementById('start-btn');
const textDisplay = document.getElementById('text-display');
const system = document.querySelector('.microwave-system');
const sound = document.getElementById('microwave-sound');

let contadorVueltas = 0;
let tiempoAnterior = 0;

function encenderMicroondas() {
  sound.play().catch(err => console.log("Interacción requerida para audio:", err));
  startBtn.disabled = true; // Aplica automáticamente 'boton-presionado.png'
  system.classList.add('active');
  
  contadorVueltas = 0;
  tiempoAnterior = 0;
  
  actualizarContenido(contadorVueltas);
}

function actualizarContenido(vuelta) {
  // Aplicamos desvanecimiento y desenfoque
  textDisplay.classList.add('evaporando');
  
  setTimeout(() => {
    // Control de tipografías por ciclo
    // Remueve las clases anteriores para evitar sobreescrituras
    textDisplay.classList.remove('fuente-manual', 'fuente-intermedia', 'fuente-courier');
    
    if (vuelta < 3) {
      // Ciclos 1, 2 y 3: Fuente manual artística
      textDisplay.classList.add('fuente-manual');
    } else if (vuelta >= 3 && vuelta < 5) {
      // Ciclos 4 y 5 (Transición intermedia): Estilo máquina/manual híbrido
      textDisplay.classList.add('fuente-intermedia');
    } else {
      // Ciclos 6, 7 y 8: Tipografía rígida Courier New
      textDisplay.classList.add('fuente-courier');
    }

    // Inyección del texto correspondiente
    textDisplay.innerHTML = `
      <p style="font-size: 11px; letter-spacing: 2px; color: #ff9f43; margin-bottom: 12px; font-weight: bold;">[ FASE DE COCCIÓN ${vuelta + 1}/8 ]</p>
      <p>${versionesTexto[vuelta]}</p>
    `;
    
    // Retiramos la clase para que aparezca suavemente con su nueva fuente
    textDisplay.classList.remove('evaporando');
  }, 500); // Mitad del proceso de transición
}

// Escucha el cambio de ciclo del audio loop
sound.addEventListener('timeupdate', () => {
  let tiempoActual = sound.currentTime;

  // Si el reloj del reproductor retrocede, significa que el loop de 37s terminó y reinició
  if (tiempoActual < tiempoAnterior) {
    contadorVueltas++;
    
    if (contadorVueltas < 8) {
      actualizarContenido(contadorVueltas);
    } else {
      apagarMicroondas();
    }
  }
  
  tiempoAnterior = tiempoActual;
});

function apagarMicroondas() {
  system.classList.remove('active');
  sound.pause();
  sound.currentTime = 0;
  startBtn.disabled = false; // Devuelve a 'boton-normal.png'
  
  textDisplay.innerHTML += `
    <p style="color: #ffda79; font-weight: bold; margin-top: 15px; text-align: center; letter-spacing: 1px;">
      🔔 ¡CLING! Proceso de destilación finalizado.
    </p>`;
}

startBtn.addEventListener('click', encenderMicroondas);