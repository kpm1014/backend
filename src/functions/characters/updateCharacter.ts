import { APIGatewayProxyHandler } from 'aws-lambda';
import { CharacterService } from '../../services/characterService';
import { APIResponse } from '../../models/response';
import { Personaje } from '../../models/spanish';

const characterService = new CharacterService();

export const handler: APIGatewayProxyHandler = async (event) => {
    try {
        const { id } = event.pathParameters || {};
        const updateData: Partial<Personaje> = JSON.parse(event.body ?? '{}');

        const updatedPersonaje = await characterService.updateCharacter(id!, updateData);

        const response: APIResponse<typeof updatedPersonaje> = {
            success: true,
            data: updatedPersonaje
        };

        return {
            statusCode: 200,
            body: JSON.stringify(response)
        };
    } catch (error) {
        console.log('error>', error)
        const errorResponse: APIResponse<null> = {
            success: false,
            error: 'Error al actualizar el personaje'
        };

        return {
            statusCode: 500,
            body: JSON.stringify(errorResponse)
        };
    }
};
