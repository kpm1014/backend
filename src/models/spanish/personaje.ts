export interface Personaje {
    id: string;
    nombre: string;
    altura: string;
    masa: string;
    colorCabello: string;
    colorPiel: string;
    colorOjos: string;
    anhoNacimiento: string;
    genero: string;
    mundoNatal: string;
    peliculas: string[];
    especies: string[];
    vehiculos: string[];
    navesEstelares: string[];
    creado: string;
    editado: string;
}

export interface PersonajeInput extends Omit<Personaje, 'id' | 'creado' | 'actualizado'> { }
