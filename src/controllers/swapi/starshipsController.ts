import { BaseController } from '../baseController';
import { SwapiStarshipService } from '../../services/swapi/swapiStarshipService';

export class StarshipsController extends BaseController {
    constructor() {
        super(new SwapiStarshipService());
    }
}
