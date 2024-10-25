import { APIGatewayProxyHandler } from 'aws-lambda';
import { BaseController } from '../../controllers/baseController';

export const createGetSchemaHandler = (controller: BaseController): APIGatewayProxyHandler =>
    async () => {
        return controller.getSchema();
    };
