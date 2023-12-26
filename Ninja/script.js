class Ninja {
    constructor(nombre) {
        this.nombre = nombre;
        this.salud = 100;
        this.velocidad = 3;
        this.fuerza = 3;
    }

    sayName() {
        console.log('Mi nombre es ${this.nombre}');
    }

    showStats() {
        console.log('Nombre: ${this.nombre}, Fuerza: ${this.fuerza}, Velocidad: ${this.velocidad}, Salud: ${this.salud}');
    }

    drinkSake() {
        this.salud += 10;
        console.log('${this.nombre} bebio sake y gano 10 puntos de salud. Salud actual: ${this.salud}');
    }
}

// Ejemplo salida
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
