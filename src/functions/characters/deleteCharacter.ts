import { APIGatewayProxyHandler } from 'aws-lambda';
import { CharacterService } from '../../services/characterService';
import { APIResponse } from '../../models/response';

const characterService = new CharacterService();

export const handler: APIGatewayProxyHandler = async (event) => {
    try {
        const { id } = event.pathParameters || {};
        await characterService.deleteCharacter(id!);

        const response: APIResponse<{ mensaje: string }> = {
            exito: true,
            mensaje: 'Personaje eliminado exitosamente'
        };

        return {
            statusCode: 200,
            body: JSON.stringify(response)
        };
    } catch (error) {
        const errorResponse: APIResponse<null> = {
            exito: false,
            error: 'Error al eliminar el personaje'
        };

        return {
            statusCode: 500,
            body: JSON.stringify(errorResponse)
        };
    }
};
