import { PeopleController } from '../../controllers/swapi/peopleController';
import {
    createGetResourceHandler,
    createGetResourceByIdHandler,
    createSearchResourceHandler,
    createGetSchemaHandler
} from '../handlers';

const peopleController = new PeopleController();

export const getPeople = createGetResourceHandler(peopleController);
export const getPerson = createGetResourceByIdHandler(peopleController);
export const searchPeople = createSearchResourceHandler(peopleController);
export const getPeopleSchema = createGetSchemaHandler(peopleController);
