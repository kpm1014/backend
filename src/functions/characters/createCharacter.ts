import { APIGatewayProxyHandler } from 'aws-lambda';
import { CharacterService } from '../../services/characterService';
import { PersonajeInput } from '../../models/spanish';
import { APIResponse } from '../../models/response';

const characterService = new CharacterService();

export const handler: APIGatewayProxyHandler = async (event) => {
    try {
        const characterInput: PersonajeInput = JSON.parse(event.body ?? '{}');
        const newCharacter = await characterService.createCharacter(characterInput);

        const response: APIResponse<typeof newCharacter> = {
            success: true,
            data: newCharacter
        };

        return {
            statusCode: 201,
            body: JSON.stringify(response)
        };
    } catch (error) {
        console.log('error', error)
        const errorResponse: APIResponse<null> = {
            success: false,
            error: 'Error al crear el personaje'
        };

        return {
            statusCode: 500,
            body: JSON.stringify(errorResponse)
        };
    }
};
