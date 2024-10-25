import { APIGatewayProxyHandler } from '../../types';
import { DynamoDBService } from '../../services/dynamodb/dynamodbService';

export const handler: APIGatewayProxyHandler = async (event) => {
    try {
        const dynamoDb = new DynamoDBService();
        const { id } = event.pathParameters || {};

        if (!id) {
            const characters = await dynamoDb.getAllCharacters();
            return {
                statusCode: 200,
                body: JSON.stringify({
                    exito: true,
                    datos: characters
                })
            };
        }

        const character = await dynamoDb.getCharacter(id);
        if (!character) {
            return {
                statusCode: 404,
                body: JSON.stringify({
                    exito: false,
                    error: 'Personaje no encontrado'
                })
            };
        }

        return {
            statusCode: 200,
            body: JSON.stringify({
                exito: true,
                datos: character
            })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                exito: false,
                error: 'Error al obtener el personaje'
            })
        };
    }
};
