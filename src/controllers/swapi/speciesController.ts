import { BaseController } from './swapiBaseController';
import { SwapiSpeciesService } from '../../services/swapi/swapiSpeciesService';

export class SpeciesController extends BaseController {
    constructor(language?: string) {
        const useTranslation = language === 'es';
        super(new SwapiSpeciesService(useTranslation));
    }
}
