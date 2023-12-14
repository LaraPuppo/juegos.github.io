class Obstaculo {
  constructor(speed) {
    // Inicialización de propiedades
    this.width = 120;
    this.height = 100;
    this.x = width;
    this.y = height - this.height;
    this.speed = speed;
  }

  mostrar(foto) {
    // Dibujar el obstáculo en la pantalla
    fill(255, 0);
    rect(this.x, this.y + 30, this.width, this.height - 50);
    image(foto, this.x, this.y, this.width, this.height);
  }

  actualizar() {
    // Actualizar la posición del obstáculo en cada cuadro
    this.x -= this.speed;
  }

  actualizarVelocidad(nuevaVelocidad) {
    // Actualizar la velocidad del obstáculo
    this.speed = nuevaVelocidad;
  }

  fueraDePantalla() {
    // Verificar si el obstáculo ha salido completamente de la pantalla
    return this.x + this.width < 0;
  }
}
