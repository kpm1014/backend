import { BaseController } from './swapiBaseController';
import { SwapiStarshipService } from '../../services/swapi/swapiStarshipService';

export class StarshipsController extends BaseController {
    constructor(language?: string) {
        const useTranslation = language === 'es';
        super(new SwapiStarshipService(useTranslation));
    }
}
