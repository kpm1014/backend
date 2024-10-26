import { APIGatewayProxyResult } from 'aws-lambda';
import { BaseService } from '../../services/swapi/baseService';

export abstract class BaseController {
    constructor(protected readonly service: BaseService) { }

    async getAll(page?: string): Promise<APIGatewayProxyResult> {
        try {
            const data = await this.service.getAll(page ? parseInt(page) : 1);
            return this.success(data);
        } catch (error) {
            return this.error(error);
        }
    }

    async getById(id: string): Promise<APIGatewayProxyResult> {
        try {
            const data = await this.service.getById(id);
            return this.success(data);
        } catch (error) {
            return this.error(error);
        }
    }

    async search(query: string): Promise<APIGatewayProxyResult> {
        try {
            const data = await this.service.search(query);
            return this.success(data);
        } catch (error) {
            return this.error(error);
        }
    }

    async getSchema(): Promise<APIGatewayProxyResult> {
        try {
            const data = await this.service.getSchema();
            return this.success(data);
        } catch (error) {
            return this.error(error);
        }
    }

    protected success(data: any): APIGatewayProxyResult {
        return {
            statusCode: 200,
            body: JSON.stringify({
                exito: true,
                datos: data
            })
        };
    }

    protected error(error: any): APIGatewayProxyResult {
        return {
            statusCode: error.statusCode ?? 500,
            body: JSON.stringify({
                exito: false,
                error: error.message
            })
        };
    }
}
