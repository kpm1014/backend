import { BaseController } from './swapiBaseController';
import { SwapiPlanetService } from '../../services/swapi/swapiPlanetService';

export class PlanetsController extends BaseController {
    constructor(language?: string) {
        const useTranslation = language === 'es';
        super(new SwapiPlanetService(useTranslation));
    }
}
