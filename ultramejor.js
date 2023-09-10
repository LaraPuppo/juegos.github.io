let rectX = [], rectY = [], rectmovX = [], rectmovY = [], rectgravedad = [];
let rect2X = [], rect2Y = [], rect2movX = [], rect2movY = [], rect2gravedad = [];
let frutas = [], frutasAleatorias = [];
let estado, boton, cantF, cantB, fondo, bomba, X, Y, miFuente, Inicio, Jugar, Creditos;
let frutasCortadas = 0;
let lastIncrementTime = 0;
const incrementInterval = 7000; // 7 segundos en milisegundos
let estado3StartTime = 0;
let tiempoTranscurridoDesdeEstado3 = 0;

function preload () {
  cargaArchivos();
}

function setup() {
  textFont(miFuente);
  createCanvas(900, 600);
  iniciarFrutas();
  iniciarBombas();
  estado = 0;
  cantF = 2;
  cantB = 0;
  boton = true;
  x = 710;
  y = 50;
}

function draw() {
  console.log (estado);
  image (fondo, 0, 0);
  fondo.resize (900, 600);
  if (estado === 0) {
    boton = ( mouseX > 350 ) && ( mouseX < 350+200 ) && ( mouseY > 510) && ( mouseY < 510+50);
    push();
    textAlign (CENTER, CENTER);
    textStyle (BOLD);
    fill(230, 200, 50);
    textSize (65);
    text ("Fruit Ninja", width/2, 80);
    fill (230);
    textSize(40);
    text ("REGLAS:", width/2, 150);
    textStyle (NORMAL);
    textSize (20);
    fill (80, 225, 80);
    text ("1- Frutas:", width/2, 200);
    text ("2- Limite de tiempo:", width/2, 290);
    text ("3- Evita las Bombas:", width/2, 390);
    fill (230);
    text ("Tu objetivo principal es cliquear al menos 30", width/2, 230);
    text ("frutas o más durante el tiempo de juego", width/2, 250);
    text ("Tienes un límite de 30 segundos para completar el juego", width/2, 320);
    text ("Debes cortar las frutas dentro de este plazo para alcanzar tu objetivo", width/2, 340);
    text ("Si tocas una bomba, perderás el juego instantáneamente ", width/2, 420);
    text ("y no podrás alcanzar tu objetivo de frutas cortadas", width/2, 440);
    fill(0, 100);
    textSize(30);
    noStroke();
    hover();
    text("¡A jugar!", width/2, 530);
    pop();
  }
  if (estado === 1) {
    image (fondo, 0, 0);
    fondo.resize (900, 600);
    text("x:"+ mouseX + ",y:"+ mouseY, mouseX, mouseY);
    textSize (60);
    textAlign (CENTER, CENTER);
    fill(255, 0, 0);
    text ("PERDISTE", width/2, height/2);
    contador(x, y);
    dibujarBotones();
  }
  if (estado ===2) {
    image (fondo, 0, 0);
    fondo.resize (900, 600);
    text("x:"+ mouseX + ",y:"+ mouseY, mouseX, mouseY);
    textSize (60);
    textAlign (CENTER, CENTER);
    fill (80, 225, 80);
    text ("GANASTE", width/2, height/2);
    contador(x, y);
    dibujarBotones();
  }
  if (estado === 3) {
    tiempoTranscurridoDesdeEstado3 = millis() - estado3StartTime;
    timer();
    contador(x, y);
    moverFrutas();
    dibujarFrutas(cantF);
    moverBombas();
    dibujarBombas(cantB);
    if ( tiempoTranscurridoDesdeEstado3 >= lastIncrementTime + incrementInterval) {
      cantF++;
      cantB++;
      lastIncrementTime = tiempoTranscurridoDesdeEstado3; // Actualiza el tiempo del último incremento
    }
    if (tiempoTranscurridoDesdeEstado3 >= 30000 && frutasCortadas >= 30) {
      estado = 2;
      x = width/2;
      y = height/2 - 50;
    }
    if (tiempoTranscurridoDesdeEstado3 >= 30000 && frutasCortadas <= 30) {
      estado = 1;
      x = width/2;
      y = height/2 - 50;
    }
  }
}

function mousePressed() {
  if (boton && estado === 0) {
    estado = 3;
    estado3StartTime = millis();
  }

  for (let i = 0; i < cantF; i++) {
    if (mouseX > rectX[i] && mouseX < rectX[i] + 100 && mouseY > rectY[i] && mouseY < rectY[i] + 100) {
      rectX[i] = -1000;
      rectY[i] = -1000;
      rectmovX[i] = 0;
      rectmovY[i] = 0;
      frutasCortadas++;
    }
  }

  for (let j = 0; j < cantB; j++) {
    if (mouseX > rect2X[j] && mouseX < rect2X[j] + 100 && mouseY > rect2Y[j] && mouseY < rect2Y[j] + 100) {
      estado = 1;
      x = width/2;
      y = height/2 - 50;
    }
  }
}
