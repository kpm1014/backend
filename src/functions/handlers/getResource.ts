import { APIGatewayProxyHandler } from 'aws-lambda';
import { BaseController } from '../../controllers/baseController';

export const createGetResourceHandler = (controller: BaseController): APIGatewayProxyHandler =>
    async (event) => {
        const { page } = event.queryStringParameters || {};
        return controller.getAll(page);
    };