import { APIGatewayProxyHandler } from 'aws-lambda';
import { CharacterService } from '../../services/characterService';
import { APIResponse } from '../../models/response';

const characterService = new CharacterService();

export const handler: APIGatewayProxyHandler = async () => {
    try {
        const characters = await characterService.getAllCharacters();

        const response: APIResponse<typeof characters> = {
            success: true,
            data: characters
        };

        return {
            statusCode: 200,
            body: JSON.stringify(response)
        };
    } catch (error) {
        console.log('error>', error)
        const errorResponse: APIResponse<null> = {
            success: false,
            error: 'Error al obtener los personajes'
        };

        return {
            statusCode: 500,
            body: JSON.stringify(errorResponse)
        };
    }
};
