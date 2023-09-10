function timer() {
  push();
  textSize(40);
  fill(0);
  let tiempoRestante = 30000 - tiempoTranscurridoDesdeEstado3; // 30000 milisegundos = 30 segundos
  let segundos = floor(tiempoRestante / 1000) % 60;
  let minutos = floor(tiempoRestante / 1000 / 60);
  let formattedMin = nf(minutos, 2);
  let formattedSec = nf(segundos, 2);
  text(formattedMin + ":" + formattedSec, 10, 50);
  pop();
}

function cargaArchivos () {
  for (let i = 0; i < 9; i++) {
    frutas[i] = loadImage ('assets/fruta'+ i + '.png');
  }
  fondo = loadImage ('assets/fondo.jpg');
  bomba = loadImage ('assets/bomba.png');
  miFuente = loadFont ('assets/go3v2.ttf');
}

function hover() {
  if (boton) {
    fill(0, 200);
    rect (350, 510, 200, 50);
    fill(255, 0, 0);
  } else {
    fill(0, 100);
    rect (350, 510, 200, 50);
    fill(100, 0, 0);
  }
}

function contador(posx, posy) {
  fill (0);
  textSize(35);
  text ("Puntos:" + frutasCortadas, x, y);
}

function dibujarBotones() {
  textSize (20);
  noStroke();
  fill(255, 100);
  ellipse (width/2-150, height/2 +100, 100);
  ellipse (width/2, height/2 +100, 100);
  ellipse (150+width/2, height/2 +100, 100);
  fill(0);
  text ("Inicio", width/2-150, height/2+100);
  text ("Jugar", width/2, height/2+100);
  text("Creditos", 150+width/2, height/2+100);
}

function iniciarFrutas() {
  for (let i = 0; i < 10; i++) {
    rectX[i] = random(200, 700);
    rectY[i] = height;
    rectmovX[i] = random(-3, 3);
    rectmovY[i] = random(-20, -15);
    rectgravedad[i] = 0.3;
    indiceFruta = frutasAleatorias[i];
    frutasAleatorias[i] = floor(random(frutas.length));
  }
}

function moverFrutas () {
  for (let i = 0; i < 10; i++) {
    rectX[i] += rectmovX[i];
    rectY[i] += rectmovY[i];
    rectmovY[i] += rectgravedad[i];
    if (rectY[i] > height) {
      rectX[i] = random(300, 600);
      rectY[i] = height;
      rectmovX[i] = random(-4, 4);
      rectmovY[i] = random(-20, -15);
    }
  }
}

function dibujarFrutas (numero) {
  for (let i = 0; i < cantF; i++) {
    push();
    noFill();
    noStroke();
    rect(rectX[i], rectY[i], 100, 100);
    let indiceFruta = frutasAleatorias[i];
    image(frutas[indiceFruta], rectX[i] - 25, rectY[i] - 25, 150, 150);
    pop();
  }
}

function iniciarBombas() {
  for (let j = 0; j < 5; j++) {
    rect2X[j] = random(200, 700);
    rect2Y[j] = height;
    rect2movX[j] = random(-3, 3);
    rect2movY[j] = random(-20, -15);
    rect2gravedad[j] = 0.4;
  }
}

function moverBombas () {
  for (let j = 0; j < 5; j++) {
    rect2X[j] += rect2movX[j];
    rect2Y[j] += rect2movY[j];
    rect2movY[j] += rect2gravedad[j];
    if (rect2Y[j] > height) {
      rect2X[j] = random(300, 600);
      rect2Y[j] = height;
      rect2movX[j] = random(-4, 4);
      rect2movY[j] = random(-20, -15);
    }
  }
}

function dibujarBombas (numero) {
  for (let j = 0; j < cantB; j++) {
    push();
    noFill();
    noStroke();
    rect(rect2X[j], rect2Y[j], 100, 100);
    image(bomba, rect2X[j]-25, rect2Y[j]-25, 150, 150);
    pop();
  }
}

//function timer() {
//  push();
//  textSize(40);
//  fill(0);
//  let seconds = millis() / 1000;
//  let sec = floor(seconds) % 60;
//  let min = floor(seconds / 60);
//  let formattedMin = nf(min, 2);
//  let formattedSec = nf(sec, 2);
//  text(formattedMin + ":" + formattedSec, 10, 50);
//  pop();
