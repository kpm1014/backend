export const config = {
    SWAPI_BASE_URL: process.env.SWAPI_BASE_URL ?? 'https://swapi.py4e.com/api',
    DYNAMODB_TABLE: process.env.TABLE_NAME ?? 'swapi-characters',
    STAGE: process.env.STAGE ?? 'dev',
    REGION: process.env.AWS_REGION ?? 'us-east-1',
    API_VERSION: process.env.API_VERSION ?? 'v1',
    CORS_ORIGIN: process.env.CORS_ORIGIN ?? '*'
};