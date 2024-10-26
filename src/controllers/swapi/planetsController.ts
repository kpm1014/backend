import { BaseController } from './swapiBaseController';
import { SwapiPlanetService } from '../../services/swapi/swapiPlanetService';

export class PlanetsController extends BaseController {
    constructor() {
        super(new SwapiPlanetService());
    }
}
