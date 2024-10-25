import { StarshipsController } from '../../controllers/swapi/starshipsController';
import {
    createGetResourceHandler,
    createGetResourceByIdHandler,
    createSearchResourceHandler,
    createGetSchemaHandler
} from '../handlers';

const starshipsController = new StarshipsController();

export const getStarships = createGetResourceHandler(starshipsController);
export const getStarship = createGetResourceByIdHandler(starshipsController);
export const searchStarships = createSearchResourceHandler(starshipsController);
export const getStarshipsSchema = createGetSchemaHandler(starshipsController);
