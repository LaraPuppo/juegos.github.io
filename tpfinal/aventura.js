class Aventura {
  constructor() {
    // Estado actual del juego
    this.estado = 0;

    // Objeto del juego que maneja la lógica del mini juego
    this.jueguito = new Juego(fuente, pantallas);

    // Temporizador
    this.timer = 0;

    // Arreglo de pantallas del juego
    this.pantalla = [];
    // Creación de instancias de la clase Pantalla y almacenamiento en el arreglo
    // Cada instancia tiene diferentes parámetros específicos para cada pantalla
    this.pantalla[0] = new Pantalla(pantallas, light, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.pantalla [1] = new Pantalla(pantallas, light, 1, 10, 15, 290, 75, 365, 420, 225, 100);
    this.pantalla [2] = new Pantalla(pantallas, light, 2, 10, 25, 230, 100, 350, 470, 225, 100);
    this.pantalla [3] = new Pantalla(pantallas, light, 3, 0, 10, 300, 55, 0, 65, 300, 50);
    this.pantalla [4] = new Pantalla(pantallas, light, 4, 20, 20, 300, 55, 20, 85, 300, 85);
    this.pantalla [5] = new Pantalla(pantallas, light, 5, 25, 20, 300, 125, 360, 20, 200, 105);
    this.pantalla [6] = new Pantalla(pantallas, light, 6, 20, 10, 250, 80, 330, 25, 250, 50);
    this.pantalla [7] = new Pantalla(pantallas, light, 7, 10, 10, 400, 70, 300, 90, 280, 80);
    this.pantalla [8] = new Pantalla(pantallas, light, 8, 25, 5, 200, 80, 360, 5, 200, 80);
    this.pantalla [9] = new Pantalla(pantallas, light, 9, 25, 15, 200, 100, 360, 15, 200, 100);
    this.pantalla [10] = new Pantalla(pantallas, light, 10, 25, 480, 200, 100, 360, 450, 200, 150);
    this.pantalla [11] = new Pantalla(pantallas, light, 11, 100, 50, 200, 100, 400, 20, 200, 100);
    this.pantalla [12] = new Pantalla(pantallas, light, 12, 25, 5, 200, 100, 360, 5, 200, 100);
    this.pantalla [13] = new Pantalla(pantallas, light, 13, 25, 5, 200, 100, 360, 5, 200, 100);
    this.pantalla [14] = new Pantalla(pantallas, light, 14, 25, 10, 200, 100, 25, 120, 200, 150);
    this.pantalla [15] = new Pantalla(pantallas, light, 15, 25, 5, 300, 150, 375, 50, 200, 80);
    this.pantalla [16] = new Pantalla(pantallas, light, 16, 25, 5, 200, 200, 360, 5, 200, 200);
    this.pantalla [17] = new Pantalla(pantallas, light, 17, 15, 70, 300, 150, 15, 240, 300, 50);
    this.pantalla [18] = new Pantalla(pantallas, light, 18, 25, 5, 200, 100, 360, 5, 200, 100);
    this.pantalla [19] = new Pantalla(pantallas, light, 19, 200, 150, 200, 100, 200, 300, 200, 100);
    this.pantalla [20] = new Pantalla(pantallas, light, 20, 150, 250, 300, 80, 150, 350, 300, 80);

    // Arreglo de botones del juego
    this.boton = [];
    // Creación de instancias de la clase Boton y almacenamiento en el arreglo
    // Cada instancia tiene diferentes parámetros específicos para cada botón
    this.boton[0] = new Boton(bold, 200, 515, 200, 50, " ", 0);
    this.boton [1] = new Boton (bold, 380, 530, 200, 50, "Continuar");
    this.boton [2] = new Boton (bold, 250, 10, 320, 50, "Enojarse con Agamenón");
    this.boton [3] = new Boton (bold, 250, 80, 320, 50, "No enojarse con Agamenón");
    this.boton [4] = new Boton (bold, 200, 500, 200, 50, "Creditos");
    this.boton [5] = new Boton (bold, 25, 130, 200, 100, "Ordenar a todos vengar a Patroclo");
    this.boton [6] = new Boton (bold, 360, 130, 200, 100, "Ordenar a todos escuchar a Odiseo");
    this.boton [7] = new Boton (bold, 25, 15, 200, 100, "No corresponder sus sentimientos");
    this.boton [8] = new Boton (bold, 360, 15, 200, 100, "Corresponder sus sentimientos");
    this.boton [9] = new Boton (bold, 200, 500, 200, 50, "Reiniciar");
  }

  mostrar() {
    // Método para mostrar la interfaz del juego según el estado actual
    switch (this.estado) {
    case 0:
      this.pantalla[0].mostrar();
      this.boton[0].mostrar();
      break;
    case 1:
      this.pantalla[1].mostrar();
      this.boton[1].mostrar();
      break;
          case 2:
      this.pantalla[2].mostrar();
      this.boton[2].mostrar();
      this.boton[3].mostrar();
      break;
    case 3:
      this.pantalla[3].mostrar();
      this.boton[1].mostrar();
      break;
    case 4:
      this.pantalla[4].mostrar();
      this.boton[1].mostrar();
      break;
    case 5:
      this.pantalla[5].mostrar();
      this.boton[4].mostrar();
      break;
    case 6:
      this.pantalla[6].mostrar();
      this.boton[1].mostrar();
      break;
    case 7:
      this.pantalla[7].mostrar();
      this.boton[1].mostrar();
      break;
    case 8:
      this.pantalla[8].mostrar();
      this.boton[1].mostrar();
      break;
    case 9:
      this.pantalla[9].mostrar();
      this.boton[5].mostrar();
      this.boton[6].mostrar();
      break;
    case 10:
      this.pantalla[10].mostrar();
      this.boton[7].mostrar();
      this.boton[8].mostrar();
      break;
    case 11:
      this.pantalla[11].mostrar();
      this.boton[1].mostrar();
      break;
    case 12:
      this.pantalla[12].mostrar();
      this.boton[1].mostrar();
      break;
    case 13:
      this.pantalla[13].mostrar();
      this.boton[1].mostrar();
      break;
    case 14:
      this.pantalla[14].mostrar();
      this.boton[1].mostrar();
      break;
    case 15:
      this.pantalla[15].mostrar();
      this.boton[4].mostrar();
      break;
    case 16:
      this.pantalla[16].mostrar();
      this.boton[4].mostrar();
      break;
    case 17:
      this.pantalla[17].mostrar();
      this.boton[1].mostrar();
      break;
    case 18:
      this.pantalla[18].mostrar();
      this.boton[4].mostrar();
      break;
    case 19:
      this.pantalla[19].mostrar();
      this.boton[9].mostrar();
      break;
    case 20:
      this.timer++;
      if (this.timer >= 300) {
        this.estado = 21;
        this.jueguito.reiniciar();
        this.timer = 0;
      }
      this.pantalla[20].mostrar();
      break;
    case 21:
      this.jueguito.mostrar(this);
      break;
    }
  }

  interactuar() {
    // Método para manejar la interacción del usuario con los botones
    // Cambia el estado del juego según la interacción
    if (this.estado === 0 && this.boton[0].estaSobre()) {
      this.estado = 1;
      return;
    }
    if (this.estado === 1 && this.boton[1].estaSobre()) {
      this.estado = 2;
      return;
    }
    if (this.estado === 2 && this.boton[3].estaSobre()) {
      this.estado = 4;
      return;
    }
    if (this.estado === 2 && this.boton[2].estaSobre()) {
      this.estado = 3;
      return;
    }
    if (this.estado === 3 && this.boton[1].estaSobre()) {
      this.estado = 6;
      return;
    }
    if (this.estado === 4 && this.boton[1].estaSobre()) {
      this.estado = 5;
      return;
    }
    if (this.estado === 6 && this.boton[1].estaSobre()) {
      this.estado = 20;
      return;
    }
    if (this.estado === 7 && this.boton[1].estaSobre()) {
      this.estado = 10;
      return;
    }
    if (this.estado === 8 && this.boton[1].estaSobre()) {
      this.estado = 9;
      return;
    }
    if (this.estado === 9 && this.boton[5].estaSobre()) {
      this.estado = 12;
      return;
    }
    if (this.estado === 9 && this.boton[6].estaSobre()) {
      this.estado = 11;
      return;
    }
    if (this.estado === 10 && this.boton[7].estaSobre()) {
      this.estado = 14;
      return;
    }
    if (this.estado === 10 && this.boton[8].estaSobre()) {
      this.estado = 13;
      return;
    }
    if (this.estado === 13 && this.boton[1].estaSobre()) {
      this.estado = 16;
      return;
    }
    if (this.estado === 14 && this.boton[1].estaSobre()) {
      this.estado = 9;
      return;
    }
    if (this.estado === 11 && this.boton[1].estaSobre()) {
      this.estado = 17;
      return;
    }
    if (this.estado === 17 && this.boton[1].estaSobre()) {
      this.estado = 18;
      return;
    }
    if (this.estado === 12 && this.boton[1].estaSobre()) {
      this.estado = 15;
      return;
    }
    if (this.estado === 5 && this.boton[4].estaSobre()) {
      this.estado = 19;
      return;
    }
    if (this.estado === 15 && this.boton[4].estaSobre()) {
      this.estado = 19;
      return;
    }
    if (this.estado === 16 && this.boton[4].estaSobre()) {
      this.estado = 19;
      return;
    }
    if (this.estado === 18 && this.boton[4].estaSobre()) {
      this.estado = 19;
      return;
    }
    if (this.estado === 19 && this.boton[9].estaSobre()) {
      this.estado = 0;
      return;
    }
  }

  teclado() {
    // Método para manejar la interacción del usuario con el teclado
    this.jueguito.teclado();
  }
}
