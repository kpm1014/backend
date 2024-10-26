import { DynamoDBService } from '../services/dynamodb/dynamodbService';
import { Character, Personaje } from '../models';
import { CharacterTranslator } from '../utils/translator/characterTranslator';

export class CharacterService {
    private readonly dbService: DynamoDBService;
    private readonly translator: CharacterTranslator;

    constructor() {
        this.dbService = new DynamoDBService();
        this.translator = new CharacterTranslator();
    }

    async createCharacter(personaje: Omit<Personaje, 'id' | 'creado' | 'editado'>): Promise<Personaje> {
        const timestamp = new Date().toISOString();
        const newPersonaje: Personaje = {
            ...personaje,
            id: `char_${Date.now()}`,
            creado: timestamp,
            editado: timestamp
        };

        const character = this.translator.toEnglish(newPersonaje);
        await this.dbService.create(character);
        return newPersonaje;
    }

    async getCharacter(id: string): Promise<Personaje | null> {
        const character = await this.dbService.getById<Character>(id);
        return character ? this.translator.toSpanish(character) : null;
    }

    async getAllCharacters(): Promise<Personaje[]> {
        const characters = await this.dbService.getAll<Character>();
        return this.translator.toSpanishList(characters);
    }

    async updateCharacter(id: string, personaje: Partial<Personaje>): Promise<Personaje> {
        const character = this.translator.toEnglish(personaje as Personaje);
        const updatedCharacter = await this.dbService.update<Character>(id, {
            ...character,
            edited: new Date().toISOString()
        });
        return this.translator.toSpanish(updatedCharacter);
    }

    async deleteCharacter(id: string): Promise<void> {
        await this.dbService.delete(id);
    }
}
