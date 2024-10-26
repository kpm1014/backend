import { APIGatewayProxyHandler } from 'aws-lambda';
import { CharacterService } from '../../services/characterService';
import { APIResponse } from '../../models/response';

const characterService = new CharacterService();

export const handler: APIGatewayProxyHandler = async () => {
    try {
        const personajes = await characterService.getAllCharacters();

        const response: APIResponse<typeof personajes> = {
            exito: true,
            datos: personajes
        };

        return {
            statusCode: 200,
            body: JSON.stringify(response)
        };
    } catch (error) {
        const errorResponse: APIResponse<null> = {
            exito: false,
            error: 'Error al obtener los personajes'
        };

        return {
            statusCode: 500,
            body: JSON.stringify(errorResponse)
        };
    }
};
