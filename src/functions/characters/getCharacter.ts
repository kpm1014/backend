import { APIGatewayProxyHandler } from 'aws-lambda';
import { CharacterService } from '../../services/characterService';
import { APIResponse } from '../../models/response';

const characterService = new CharacterService();

export const handler: APIGatewayProxyHandler = async (event) => {
    try {
        const { id } = event.pathParameters || {};
        const personaje = await characterService.getCharacter(id!);

        if (!personaje) {
            const notFoundResponse: APIResponse<null> = {
                exito: false,
                error: 'Personaje no encontrado'
            };
            return {
                statusCode: 404,
                body: JSON.stringify(notFoundResponse)
            };
        }

        const response: APIResponse<typeof personaje> = {
            exito: true,
            datos: personaje
        };

        return {
            statusCode: 200,
            body: JSON.stringify(response)
        };
    } catch (error) {
        const errorResponse: APIResponse<null> = {
            exito: false,
            error: 'Error al obtener el personaje'
        };

        return {
            statusCode: 500,
            body: JSON.stringify(errorResponse)
        };
    }
};
