import { BaseController } from './swapiBaseController';
import { SwapiFilmService } from '../../services/swapi/swapiFilmService';

export class FilmsController extends BaseController {
    constructor(language?: string) {
        const useTranslation = language === 'es';
        super(new SwapiFilmService(useTranslation));
    }
}
