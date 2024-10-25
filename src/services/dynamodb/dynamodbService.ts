import { DynamoDB } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocument } from '@aws-sdk/lib-dynamodb';
import { Character, CharacterInput } from '../../models/english';
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

    async createCharacter(character: CharacterInput): Promise<Character> {
        const timestamp = new Date().toISOString();
        const newCharacter: Character = {
            ...character,
            id: `char_${Date.now()}`,
            creado: timestamp,
            actualizado: timestamp
        };

        await this.docClient.put({
            TableName: this.tableName,
            Item: newCharacter
        });

        return newCharacter;
    }

    async getCharacter(id: string): Promise<Character | null> {
        const result = await this.docClient.get({
            TableName: this.tableName,
            Key: { id }
        });

        return result.Item as Character || null;
    }

    async getAllCharacters(): Promise<Character[]> {
        const result = await this.docClient.scan({
            TableName: this.tableName
        });

        return result.Items as Character[];
    }
}
