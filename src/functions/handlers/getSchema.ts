import { APIGatewayProxyHandler } from 'aws-lambda';
import { BaseController } from '../../controllers/swapi/swapiBaseController';

export const createGetSchemaHandler = (controller: BaseController): APIGatewayProxyHandler =>
    async () => {
        return controller.getSchema();
    };
