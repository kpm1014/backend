import { APIGatewayProxyHandler } from 'aws-lambda';
import { BaseController } from '../../controllers/baseController';

export const createGetResourceByIdHandler = (controller: BaseController): APIGatewayProxyHandler =>
    async (event) => {
        const { id } = event.pathParameters || {};
        return controller.getById(id!);
    };
