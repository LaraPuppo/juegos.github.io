let aventura;
let pantallas = [];
let fuente;
let bold;
let light;
let patroclo = [];
let flecha;

function preload() {
  bold = loadFont ('assets/roboto-bold.ttf');
  light = loadFont ('assets/roboto-light.ttf');
  fuente = loadFont ('assets/greek-freak.ttf');
  flecha = loadImage('assets/flecha.png');
  for ( let i = 0; i < 3; i++ ) {
    patroclo[i] = loadImage('assets/patroclo'+i+'.png');
  }
  for ( let i = 0; i < 21; i++ ) {
    pantallas[i] = loadImage("assets/pantalla"+ i +".png");
  }
}

function setup() {
  createCanvas(600, 600);
  aventura = new Aventura();
}

function draw() {
  aventura.mostrar();
}

function mousePressed() {
  aventura.interactuar();
}

function keyPressed() {
  aventura.teclado(); 
}
