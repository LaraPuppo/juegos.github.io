class Player {
  constructor() {
    // Propiedades del jugador
    this.width = 80;
    this.height = 150;
    this.x = 100;
    this.y = height;
    this.gravity = 0.9;
    this.velocity = 0;
    this.jumpHeight = -25;
    this.s = 0;
    this.frameCounter = 0;
  }

  saltar() {
    // Método para que el jugador salte
    if (this.y === height - this.height) {
      this.velocity += this.jumpHeight;
    }
  }

  mostrar(imgArray) {
    // Método para mostrar al jugador en la pantalla
    fill(0, 0);
    rectMode(CORNER);
    rect(this.x, this.y, this.width - 10, this.height + 10);
    image(imgArray[this.s], this.x, this.y - 10, this.width, this.height + 10);

    if (this.frameCounter >= 10) {
      this.s = (this.s + 1) % imgArray.length;
      this.frameCounter = 0;
    }
    this.frameCounter++;
  }

  actualizar() {
    // Método para actualizar la posición y la velocidad del jugador
    this.velocity += this.gravity;
    this.y += this.velocity;

    if (this.y >= height - this.height) {
      this.y = height - this.height;
      this.velocity = 0;
    }
  }

  colision(obstaculo) {
    // Método para verificar colisiones entre el jugador y el obstáculo
    let playerX = this.x;
    let playerY = this.y;
    let obstX = obstaculo.x;
    let obstY = obstaculo.y;

    return (
      playerX + this.width >= obstX &&
      playerX <= obstX + obstaculo.width &&
      playerY + this.height >= obstY &&
      playerY <= obstY + obstaculo.height
    );
  }
}
