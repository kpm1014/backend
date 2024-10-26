import { BaseController } from './swapiBaseController';
import { SwapiPeopleService } from '../../services/swapi/swapiPeopleService';

export class PeopleController extends BaseController {
    constructor(language?: string) {
        const useTranslation = language === 'es';
        super(new SwapiPeopleService(useTranslation));
    }
}
