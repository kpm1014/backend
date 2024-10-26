import { APIGatewayProxyResult } from 'aws-lambda';
import { BaseService } from '../../services/swapi/baseService';

export abstract class BaseController {
    constructor(protected readonly service: BaseService) { }

    async getAll(page?: string, lang?: string): Promise<APIGatewayProxyResult> {
        try {
            const useTranslation = lang === 'es';
            const data = await this.service.getAll(page ? parseInt(page) : 1, useTranslation);
            return this.success(data);
        } catch (error) {
            return this.error(error);
        }
    }

    async getById(id: string, lang?: string): Promise<APIGatewayProxyResult> {
        try {
            const useTranslation = lang === 'es';
            const data = await this.service.getById(id, useTranslation);
            return this.success(data);
        } catch (error) {
            return this.error(error);
        }
    }

    async search(query: string, lang?: string): Promise<APIGatewayProxyResult> {
        try {
            const useTranslation = lang === 'es';
            const data = await this.service.search(query, useTranslation);
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
                success: true,
                data: data
            })
        };
    }

    protected error(error: any): APIGatewayProxyResult {
        return {
            statusCode: error.statusCode ?? 500,
            body: JSON.stringify({
                success: false,
                error: error.message
            })
        };
    }
}
