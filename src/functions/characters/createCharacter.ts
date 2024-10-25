import { APIGatewayProxyHandler } from '../../types';
import { DynamoDBService } from '../../services/dynamodb/dynamodbService';
import { CharacterInput } from '../../models/english';

export const handler: APIGatewayProxyHandler = async (event) => {
    try {
        const dynamoDb = new DynamoDBService();
        const characterData: CharacterInput = JSON.parse(event.body ?? '');

        const newCharacter = await dynamoDb.createCharacter(characterData);

        return {
            statusCode: 201,
            body: JSON.stringify({
                exito: true,
                datos: newCharacter
            })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                exito: false,
                error: 'Error al crear el personaje'
            })
        };
    }
};
