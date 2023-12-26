class Ninja {
    constructor(nombre) {
        this.nombre = nombre;
        this.salud = 100;
        this.velocidad = 3;
        this.fuerza = 3;
    }

    sayName = () => {
        console.log(`Mi nombre es ${this.nombre}`);
    }

    showStats = () => {
        console.log(`Nombre: ${this.nombre}, Fuerza: ${this.fuerza}, Velocidad: ${this.velocidad}, Salud: ${this.salud}`);
    }

    drinkSake = () => {
        this.salud += 10;
        console.log(`${this.nombre} bebio sake y gano 10 puntos de salud. Salud actual: ${this.salud}`);
    }
}

//clase sensei

class Sensei extends Ninja {
    constructor(nombre) {
        super(nombre);
        this.salud = 200;
        this.fuerza = 10;
        this.velocidad = 10;
        this.sabiduria = 10;
    }

    speakWisdom = () => {
        this.drinkSake();
        console.log('Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses');
    }
}

// Ejemplo salida
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

const sensei1 = new Sensei("Hong");
sensei1.sayName();
sensei1.showStats();
sensei1.drinkSake();
sensei1.speakWisdom();
sensei1.showStats();
