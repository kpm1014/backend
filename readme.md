# SWAPI API - Star Wars API con Serverless Framework

Este proyecto implementa una API RESTful basada en SWAPI (Star Wars API) utilizando Serverless Framework, AWS Lambda y DynamoDB.

## Características

- Arquitectura serverless usando AWS Lambda
- Base de datos DynamoDB para almacenamiento persistente
- Endpoints para gestionar recursos de Star Wars (personajes, películas, naves, etc.)
- Soporte para búsquedas y consultas
- Documentación OpenAPI/Swagger integrada
- Soporte para CORS
- Traducción español/inglés disponible

## Endpoints Principales

### Personajes (Characters)
- POST `/api/characters` - Crear nuevo personaje
- GET `/api/characters/{id}` - Obtener personaje por ID
- GET `/api/characters` - Listar todos los personajes
- PUT `/api/characters/{id}` - Actualizar personaje
- DELETE `/api/characters/{id}` - Eliminar personaje

### Personas (People)
- GET `/api/people` - Listar todas las personas
- GET `/api/people/{id}` - Obtener persona por ID
- GET `/api/people/search` - Buscar personas
- GET `/api/people/schema` - Obtener esquema

### Películas (Films)
- GET `/api/films` - Listar todas las películas
- GET `/api/films/{id}` - Obtener película por ID
- GET `/api/films/search` - Buscar películas
- GET `/api/films/schema` - Obtener esquema

### Naves (Starships)
- GET `/api/starships` - Listar todas las naves
- GET `/api/starships/{id}` - Obtener nave por ID
- GET `/api/starships/search` - Buscar naves
- GET `/api/starships/schema` - Obtener esquema

### Especies (Species)
- GET `/api/species` - Listar todas las especies
- GET `/api/species/{id}` - Obtener especie por ID
- GET `/api/species/search` - Buscar especies
- GET `/api/species/schema` - Obtener esquema

### Vehículos (Vehicles)
- GET `/api/vehicles` - Listar todos los vehículos
- GET `/api/vehicles/{id}` - Obtener vehículo por ID
- GET `/api/vehicles/search` - Buscar vehículos
- GET `/api/vehicles/schema` - Obtener esquema

### Planetas (Planets)
- GET `/api/planets` - Listar todos los planetas
- GET `/api/planets/{id}` - Obtener planeta por ID
- GET `/api/planets/search` - Buscar planetas
- GET `/api/planets/schema` - Obtener esquema

## Configuración Local

1. Instalar dependencias:
```bash
npm install
```

2. Iniciar servidor local:

```bash
npm run dev
```

El servidor estará disponible en http://localhost:3000/dev

Variables de Entorno
SWAPI_BASE_URL: URL base de SWAPI
TABLE_NAME: Nombre de la tabla DynamoDB
STAGE: Entorno de despliegue
REGION: Región de AWS
API_VERSION: Versión de la API
CORS_ORIGIN: Origen permitido para CORS

Despliegue

Para desplegar a AWS:

```bash
serverless deploy
```

Documentación

La documentación OpenAPI/Swagger está disponible en: 

```bash
http://localhost:3000/dev/swagger
```

Tecnologías Utilizadas

* Serverless Framework
* AWS Lambda
* DynamoDB
* TypeScript
* Node.js