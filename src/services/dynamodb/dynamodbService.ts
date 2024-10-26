import { DynamoDB } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocument } from '@aws-sdk/lib-dynamodb';
import { config } from '../../config/env';

export class DynamoDBService {
    private readonly docClient: DynamoDBDocument;
    private readonly tableName: string;

    constructor() {
        const client = new DynamoDB({
            region: config.REGION
        });
        this.docClient = DynamoDBDocument.from(client);
        this.tableName = config.DYNAMODB_TABLE;
    }

    async create<T extends { id: string }>(item: T): Promise<T> {
        await this.docClient.put({
            TableName: this.tableName,
            Item: item
        });
        return item;
    }

    async getById<T>(id: string): Promise<T | null> {
        const result = await this.docClient.get({
            TableName: this.tableName,
            Key: { id }
        });
        return (result.Item as T) ?? null;
    }

    async getAll<T>(): Promise<T[]> {
        const result = await this.docClient.scan({
            TableName: this.tableName
        });
        return result.Items as T[];
    }

    async update<T extends { id: string }>(id: string, item: Partial<T>): Promise<T> {
        const updateExpression = this.buildUpdateExpression(item);
        const result = await this.docClient.update({
            TableName: this.tableName,
            Key: { id },
            ...updateExpression,
            ReturnValues: 'ALL_NEW'
        });
        return result.Attributes as T;
    }

    async delete(id: string): Promise<void> {
        await this.docClient.delete({
            TableName: this.tableName,
            Key: { id }
        });
    }

    private buildUpdateExpression(item: Record<string, any>) {
        const expressionAttributes: Record<string, any> = {};
        const expressionAttributeNames: Record<string, string> = {};
        let updateExpression = 'SET';

        Object.entries(item).forEach(([key, value], index) => {
            if (key !== 'id') {
                const attributeKey = `:val${index}`;
                const attributeName = `#attr${index}`;
                expressionAttributes[attributeKey] = value;
                expressionAttributeNames[attributeName] = key;
                updateExpression += ` ${attributeName} = ${attributeKey},`;
            }
        });

        return {
            UpdateExpression: updateExpression.slice(0, -1),
            ExpressionAttributeValues: expressionAttributes,
            ExpressionAttributeNames: expressionAttributeNames
        };
    }
}
