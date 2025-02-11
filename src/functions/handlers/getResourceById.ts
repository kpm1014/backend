import { APIGatewayProxyHandler } from 'aws-lambda';
import { BaseController } from '../../controllers/swapi/swapiBaseController';

export const createGetResourceByIdHandler = (controller: BaseController): APIGatewayProxyHandler =>
    async (event) => {
        const { id } = event.pathParameters || {};
        return controller.getById(id!);
    };
