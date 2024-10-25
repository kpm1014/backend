import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

export type APIGatewayProxyHandler = (
    event: APIGatewayProxyEvent
) => Promise<APIGatewayProxyResult>;

export interface APIGatewayProxyEventWithBody<T> extends Omit<APIGatewayProxyEvent, 'body'> {
    body: T;
}
