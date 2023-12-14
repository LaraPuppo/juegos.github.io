class Boton {
  constructor(b, x, y, ancho, alto, txt) {
    // Propiedades del botón
    this.bold = b;      // Fuente del texto del botón
    this.x = x;         // Posición x del botón
    this.y = y;         // Posición y del botón
    this.ancho = ancho; // Ancho del botón
    this.alto = alto;   // Alto del botón
    this.texto = txt;   // Texto del botón
  }

  mostrar() {
    // Método para mostrar el botón en la pantalla
    textFont(this.bold);
    if (this.estaSobre()) {
      fill(0, 100);      
      stroke(1);         
      strokeWeight(3);   
    } else {
      fill(0, 50);        
    }
    rect(this.x, this.y, this.ancho, this.alto); 
    fill(255);           
    noStroke();          
    textAlign(CENTER, CENTER);
    textSize(25);        
    text(this.texto, this.x, this.y, this.ancho, this.alto); 
  }

  estaSobre() {
    // Método para verificar si el mouse está sobre el botón
    return mouseX > this.x && mouseX < this.x + this.ancho && mouseY > this.y && mouseY < this.y + this.alto;
  }
}
