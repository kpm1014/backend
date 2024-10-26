import { APIGatewayProxyResult } from 'aws-lambda';
import { DynamoDBService } from '../../services/dynamodb/dynamodbService';

export abstract class BaseDynamoDbController<T extends { id: string }> {
    constructor(protected readonly service: DynamoDBService) { }

    async create(data: Omit<T, 'id' | 'creado' | 'editado'>): Promise<APIGatewayProxyResult> {
        try {
            const item = await this.service.create(this.prepareForCreate(data));
            return this.success(item, 201);
        } catch (error: any) {
            return this.error(error);
        }
    }

    async getById(id: string): Promise<APIGatewayProxyResult> {
        try {
            const item = await this.service.getById<T>(id);
            if (!item) {
                return this.error(new Error('Recurso no encontrado'), 404);
            }
            return this.success(item);
        } catch (error: any) {
            return this.error(error);
        }
    }

    async getAll(): Promise<APIGatewayProxyResult> {
        try {
            const items = await this.service.getAll<T>();
            return this.success(items);
        } catch (error: any) {
            return this.error(error);
        }
    }

    async update(id: string, data: Partial<T>): Promise<APIGatewayProxyResult> {
        try {
            const item = await this.service.update<T>(id, this.prepareForUpdate(data));
            return this.success(item);
        } catch (error: any) {
            return this.error(error);
        }
    }

    async delete(id: string): Promise<APIGatewayProxyResult> {
        try {
            await this.service.delete(id);
            return this.success({ mensaje: 'Recurso eliminado exitosamente' });
        } catch (error: any) {
            return this.error(error);
        }
    }

    protected abstract prepareForCreate(data: any): T;
    protected abstract prepareForUpdate(data: any): Partial<T>;

    protected success(data: any, statusCode: number = 200): APIGatewayProxyResult {
        return {
            statusCode,
            body: JSON.stringify({
                success: true,
                data: data
            })
        };
    }

    protected error(error: Error, statusCode: number = 500): APIGatewayProxyResult {
        return {
            statusCode,
            body: JSON.stringify({
                success: false,
                error: error.message
            })
        };
    }
}
