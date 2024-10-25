export interface Personaje {
    id: string;
    nombre: string;
    altura: string;
    masa: string;
    colorCabello: string;
    colorPiel: string;
    colorOjos: string;
    añoNacimiento: string;
    genero: string;
    mundoNatal: string;
    peliculas: string[];
    especies: string[];
    vehiculos: string[];
    navesEstelares: string[];
    creado: string;
    actualizado: string;
}

export interface PersonajeInput extends Omit<Personaje, 'id' | 'creado' | 'actualizado'> { }
