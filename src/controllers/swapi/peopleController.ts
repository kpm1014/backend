import { BaseController } from './swapiBaseController';
import { SwapiPeopleService } from '../../services/swapi/swapiPeopleService';

export class PeopleController extends BaseController {
    constructor() {
        super(new SwapiPeopleService());
    }
}
