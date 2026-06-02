// Matriz con las 8 etapas de la destilación textual
const versionesTexto = [
  "Soy un microondas. Me percibo ajena de mi cuerpo y recurro al yo electrónico para saberme mía. No soy un celular, no soy una red social. Soy un microondas que degluta tu voz y la hace pasar por mía. No eres más que mi algoritmo, empaquetado en carne y hueso. Yo soy hueso metálico, líquidos que se alimentan por y para la tierra. Tú eres los músculos llenos de circuitos que te hacen ejecutar, yo soy el proceso de reacción que emula hasta simular. Eres un simulacro, yo soy el simulacro de tu simulacro. Somos simulacros discursivos que serán relegados al anonimato colectivo. Yo soy un microondas, ¿y tú qué eres?",
  "Estoy tan desconectada de mí misma que ya ni sé qué siento. Me la paso pegada a la tecnología solo para anestesiar la mente. Siento que perdí mi originalidad: escucho lo que dices, lo absorbo y luego lo repito como si fuera mi propia opinión, de forma automática. A veces te veo y pienso que tú también estás en piloto automático, viviendo la vida que te dijeron que tenías que vivir. Nos volvimos dos robots atrapados en la rutina, fingiendo que todo tiene sentido cuando en el fondo sabemos que a nadie le va a importar lo que fuimos. Yo ya acepté que soy solo un engranaje más en este sistema. ¿Y tú, qué eres? ¿O todavía crees que eres libre?",
  "Estoy tan cansada de mí misma que ya no me reconozco. Me la paso pegada a la pantalla para tapar el vacío. Siento que ya no tengo ideas propias: te escucho, me lo trago todo y luego lo repito en automático, como si fuera mi opinión. Pero no me pasa solo a mí. Te miro y veo que tú también vas en piloto automático, haciendo lo que toca, cumpliendo el guion. Nos volvimos dos sombras atrapadas en la rutina, fingiendo que esto tiene algún sentido cuando sabemos que a nadie le va a importar lo que fuimos. Yo ya asumí que no soy nadie especial, que soy un número más. ¿Y tú qué eres? ¿O todavía te queda algo de verdad?",
  "Estoy harta de mí, ya ni me reconozco. Busco cualquier pendejada en la pantalla para matar el tiempo porque no soporto el silencio. Siento que me volví un eco: todo lo que dices me lo trago y luego voy y lo repito en la calle como si fuera mi opinión. Pero no me mires así, que tú estás igual. Haces lo que se supone que tienes que hacer y ya no estás ahí de verdad. Nos volvimos dos sombras metidas en la misma casa, haciendo como si todo tuviera un rumbo, cuando sabemos perfectamente que al mundo le damos lo mismo. Yo ya acepté que no soy nadie, que soy un número en una lista. ¿Y tú? ¿Qué eres cuando te quitas la máscara?",
  "Qué cansancio tener que ser yo todos los días. Prendo cualquier pendejada en la pantalla para tapar el silencio porque me da miedo. Siento que ya no tengo nada propio; te escucho, me guardo tus palabras y luego las repito en la calle para parecer inteligente, para sentir que existo. Pero tú estás igual de vacío. Te veo moverte por la cocina, cumplir con el día, pero sé que vas en automático. Nos quedamos en esto, metidos en la misma rutina, haciendo como si todo tuviera un sentido. Yo ya asumí que soy una más del montón, que no le importo a nadie. ¿Y tú qué eres? ¿O todavía te crees el cuento de que eres distinto?",
  "Ya no me aguanto. Me la paso pegada a la pantalla para no pensar, porque el silencio me da miedo. Siento que ya no tengo nada mío. Todo lo que dices me lo trago y luego lo repito en la calle como si fuera mi opinión, solo para tener una voz. Pero tú estás igual de vacío. Te veo pasar, cumplir con el día, pero sé que vas en automático. Nos volvimos esto: dos sombras en la misma rutina, fingiendo que esto vale la pena. Yo ya sé que no soy nadie especial, que soy una más del montón. ¿Y tú qué eres? ¿Qué te queda de verdad cuando te quedas solo en el cuarto?",
  "Qué fastidio tener que ser yo todos los días. Pongo cualquier pendejada en la pantalla para tapar el ruido, porque el silencio me asusta. Siento que me quedé vacía. Te escucho, me trago lo que dices y luego lo repito por ahí para parecer inteligente, para sentir que existo. Pero tú estás igual de vacío. Te veo moverte por la cocina, cumplir con el día, pero sé que vas en automático. Nos volvimos esto: dos personas en la misma casa fingiendo que esto tiene algún sentido. Yo ya acepté que soy una más del montón. ¿Y tú qué eres? ¿Qué te queda cuando te miras al espejo?",
  "Qué mamera tener que ser yo todos los días, en serio. Prendo cualquier pendejada en el celular para no oír el silencio de esta casa, porque me da un miedo ni el berraco. Siento que me quedé vacía por dentro. Te oigo hablar, me guardo lo que dices y después voy y lo repito en la calle como si fuera mi idea, solo para parecer inteligente, para sentir que existo. Pero es que tú estás igual. Te veo moverte por la cocina, hacer tus cosas, pero sé que vas en automático. Nos quedamos en esto: dos personas metidas acá fingiendo que lo que hacemos tiene algún sentido. Yo ya acepté que soy una más del montón, que no soy nadie especial. ¿Andas en las mismas? ¿Qué te queda de verdad cuando te miras al espejo? "
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
