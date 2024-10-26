import { APIGatewayProxyHandler } from 'aws-lambda';
import { CharacterService } from '../../services/characterService';
import { PersonajeInput } from '../../models/spanish';
import { APIResponse } from '../../models/response';

const characterService = new CharacterService();

export const handler: APIGatewayProxyHandler = async (event) => {
    try {
        const personajeInput: PersonajeInput = JSON.parse(event.body ?? '{}');
        const newPersonaje = await characterService.createCharacter(personajeInput);

        const response: APIResponse<typeof newPersonaje> = {
            exito: true,
            datos: newPersonaje
        };

        return {
            statusCode: 201,
            body: JSON.stringify(response)
        };
    } catch (error) {
        const errorResponse: APIResponse<null> = {
            exito: false,
            error: 'Error al crear el personaje'
        };

        return {
            statusCode: 500,
            body: JSON.stringify(errorResponse)
        };
    }
};
