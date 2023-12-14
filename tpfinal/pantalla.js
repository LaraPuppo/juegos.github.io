class Pantalla {
  constructor(p, f, indexP, x1, y1, ancho1, alto1, x2, y2, ancho2, alto2) {
    // Inicialización de propiedades
    this.p = p;          // Imágenes utilizados en la pantalla
    this.font = f;       // Fuente utilizada para el texto
    this.c = 20;         // Número de textos predefinidos
    this.indexP = indexP; // Índice actual de texto a mostrar
    this.x1 = x1;        // Posición x del primer cuadro de texto
    this.y1 = y1;        // Posición y del primer cuadro de texto
    this.ancho1 = ancho1; // Ancho del primer cuadro de texto
    this.alto1 = alto1;   // Alto del primer cuadro de texto
    this.x2 = x2;        // Posición x del segundo cuadro de texto
    this.y2 = y2;        // Posición y del segundo cuadro de texto
    this.ancho2 = ancho2; // Ancho del segundo cuadro de texto
    this.alto2 = alto2;   // Alto del segundo cuadro de texto
    this.width = width;   // Ancho de la pantalla
    this.height = height; // Alto de la pantalla

    // Textos predefinidos
    this.textos = new Array(2);
    this.textos[0] = new Array(this.c);
    this.textos[1] = new Array(this.c);

    // Inicializar los textos
    for (let i = 0; i < this.c; i++) {
      this.textos[0][i] = "";
      this.textos[1][i] = "";
    }

    // Textos específicos para la historia o instrucciones del juego
    this.textos[0][0] = "";
    this.textos[1][0] = "";
    this.textos[0][1] = "La guerra de Troya estaba en curso y ya había transcurrido una década desde que los griegos habían sitiado la ciudad de Troya";
    this.textos[1][1] = "Los griegos mantenían cierta ventaja, pero no habían logrado tomar la ciudad. La situación era tensa y la lucha se prolongaba";
    this.textos[0][2] = "Aquiles tiene un desacuerdo con Agamenón debido al reparto de tesoros de guerra.";
    this.textos[1][2] = "Agamenón le quita a Aquiles su premio de guerra, una joven llamada Briseida";
    this.textos[0][3] = "Enojado por la injusticia, Aquiles decide retirarse de la batalla y se encierra en su tienda";
    this.textos[1][3] = "Esta retirada debilita enormemente el poderío de los griegos";
    this.textos[0][4] = "Con Aquiles plenamente comprometido con la guerra, los griegos logran una mayor coordinación y estrategia";
    this.textos[1][4] = "Su presencia y habilidades marciales inspiran a los demás guerreros griegos, aumentando su moral y determinación para enfrentar a los troyanos";
    this.textos[0][5] = "Después de muchos años de guerra, finalmente se llega a una tregua entre griegos y troyanos. Ambos bandos reconocen la devastación que la guerra ha causado y deciden buscar una solución pacífica";
    this.textos[1][5] = "Se realizan negociaciones y acuerdos que establecen la paz, poniendo fin a la guerra de Troya";
    this.textos[0][6] = "Patroclo se dirige a la tienda de Aquiles con la intención de persuadirlo para que regrese a la batalla";
    this.textos[1][6] = "Él busca convencer a Aquiles de volver a luchar";
    this.textos[0][7] = "Patroclo consigue su objetivo y llega victorioso a la tienda de Aquiles";
    this.textos[1][7] = "Le insta a reconsiderar su decisión de retirarse y a unirse nuevamente a la lucha contra los troyanos";
    this.textos[0][8] = "Patroclo no logra atravezar el campo de batalla";
    this.textos[1][8] = "Y es asesinado por Héctor";
    this.textos[0][9] = "Al enterarse de la muerte de su mejor amigo, Aquiles no duda en volver a la batalla a asesinar a Héctor";
    this.textos[1][9] = "Pero es detenido por Odiseo que pide que escuchen su idea";
    this.textos[0][10] = "Patroclo siente que el momento es propicio para expresar sus propios sentimientos";
    this.textos[1][10] = "Lleno de coraje, le confiesa a Aquiles que su amor por él va más allá de la amistad y que ha anhelado estar a su lado de una manera más íntima";
    this.textos[0][11] = "Odiseo propone la elaboración de un gigantesco caballo de madera, concebido como un símbolo de rendición";
    this.textos[1][11] = "Al mismo tiempo que planean ocultarse en su interior para infiltrarse en la ciudad";
    this.textos[0][12] = "Los intentos directos de asalto se encuentran con una feroz resistencia troyana";
    this.textos[1][12] = "Los griegos sufren bajas significativas y se enfrentan Aquiles y Héctor";
    this.textos[0][13] = "Aquiles toma las manos de Patroclo entre las suyas y le confiesa que también ha sentido algo más por él";
    this.textos[1][13] = "Pero que nunca se atrevió a expresarlo por temor a arruinar su amistad";
    this.textos[0][14] = "Aquiles le expresa a Patroclo que su amor no puede ser correspondido de la forma que él desea";
    this.textos[1][14] = "La respuesta a su confesión lo lleva a Patroclo a tomar una arriesgada decisión: robar las armaduras de Aquiles y asumir su identidad en la batalla";
    this.textos[0][15] = "Durante uno de los últimos enfrentamientos de la guerra, Aquiles y Héctor se encuentran en un duelo final. A pesar de la ira y la determinación de Aquiles, Héctor muestra una gran valentía y habilidad en el combate";
    this.textos[1][15] = "En un choque épico, Héctor logra superar a Aquiles y lo liquida en combate";
    this.textos[0][16] = "En batalla, Aquiles y Patroclo luchan lado a lado. La presencia del otro les da fuerza y valentía para enfrentar cualquier desafío";
    this.textos[1][16] = "A lo largo de la guerra, lideran a las tropas griegas con una nueva ferocidad y estrategia. Ganan la guerra de Troya y vuelven victoriosos a su nuevo hogar";
    this.textos[0][17] = "Contentos, los troyanos aceptan el obsequio y lo introducen dentro de las murallas de la ciudad. Durante la noche, los guerreros griegos ocultos en el caballo emergen y abren las puertas de Troya para que el ejército griego ingrese a la ciudad";
    this.textos[1][17] = "En medio del caos, los griegos saquean y destruyen Troya";
    this.textos[0][18] = "Aquiles se enfrenta a Héctor en un combate singular y lo mata en venganza por la muerte de Patroclo";
    this.textos[1][18] = "Luego, arrastra el cuerpo de Héctor por el suelo como un acto de desprecio hacia los troyanos";
    this.textos[0][19] = "Creado por Lara Puppo y Agustina Ulrich";
    this.textos[1][19] = "Profes: Mati y Fer";
    this.textos[0][20] = "Ayuda a Patroclo a llegar a la tienda de Aquiles pasando por el campo de batalla y saltando los obstáculos que se interponen en su camino.";
    this.textos[1][20] = "Deberas presionar ESPACIO para saltar. Cuentas con 3 vidas y tienes que sobrevivir 30 segundos para llegar a destino";
  }

  mostrar() {
    // Mostrar la pantalla con textos y fondos
    textFont(this.font);
    noStroke();
    image(this.p[this.indexP], 0, 0, this.width, this.height);
    fill(255, 100);
    rect(this.x1, this.y1 - 5, this.ancho1, this.alto1);
    rect(this.x2, this.y2 - 5, this.ancho2, this.alto2);
    textAlign(CENTER, CENTER);
    fill(0);
    textSize(15);
    text(this.textos[0][this.indexP], this.x1, this.y1 - 5, this.ancho1, this.alto1);
    text(this.textos[1][this.indexP], this.x2, this.y2 - 5, this.ancho2, this.alto2);
  }
}
