import { BaseDynamoDbController } from './dynamoDbBaseController';
import { Character } from '../../models/english';
import { Personaje, PersonajeInput } from '../../models/spanish';
import { CharacterTranslator } from '../../utils/translator/characterTranslator';

export class CharacterController extends BaseDynamoDbController<Character> {
    private readonly translator = new CharacterTranslator();

    protected prepareForCreate(data: PersonajeInput): Character {
        const timestamp = new Date().toISOString();
        const personaje: Personaje = {
            ...data,
            id: `char_${Date.now()}`,
            creado: timestamp,
            editado: timestamp
        };
        return this.translator.toEnglish(personaje);
    }

    protected prepareForUpdate(data: Partial<Personaje>): Partial<Character> {
        return this.translator.toEnglish(data as Personaje);
    }
}
