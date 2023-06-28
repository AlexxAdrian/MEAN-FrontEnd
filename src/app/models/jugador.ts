export class Jugador {
    _id?: number;
    jugador: string;
    posicion: string;
    equipo: string;
    goles: number;

    constructor(jugador: string, posicion: string, equipo: string, goles: number) {
        this.jugador = jugador;
        this.posicion = posicion;
        this.equipo = equipo;
        this.goles = goles;
    }
}
