
export enum Color {
    rojo, negro, azul, amarillo, verde, violeta, purpura, gris, morado, rosa
}

export interface Heroe {
    nombre: string;
    vuela: boolean;
    color: Color;
}