import { BaseController } from '../baseController';
import { SwapiPlanetService } from '../../services/swapi/swapiPlanetService';

export class PlanetsController extends BaseController {
    constructor() {
        super(new SwapiPlanetService());
    }
}
