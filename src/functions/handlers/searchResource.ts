import { APIGatewayProxyHandler } from 'aws-lambda';
import { BaseController } from '../../controllers/baseController';

export const createSearchResourceHandler = (controller: BaseController): APIGatewayProxyHandler =>
    async (event) => {
        const { query } = event.queryStringParameters || {};
        return controller.search(query!);
    };
