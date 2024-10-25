import { BaseController } from '../baseController';
import { SwapiPeopleService } from '../../services/swapi/swapiPeopleService';

export class PeopleController extends BaseController {
    constructor() {
        super(new SwapiPeopleService());
    }
}
