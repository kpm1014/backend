import { FilmsController } from '../../controllers/swapi/filmsController';
import {
    createGetResourceHandler,
    createGetResourceByIdHandler,
    createSearchResourceHandler,
    createGetSchemaHandler
} from '../handlers';

const filmsController = new FilmsController();

export const getFilms = createGetResourceHandler(filmsController);
export const getFilm = createGetResourceByIdHandler(filmsController);
export const searchFilms = createSearchResourceHandler(filmsController);
export const getFilmsSchema = createGetSchemaHandler(filmsController);