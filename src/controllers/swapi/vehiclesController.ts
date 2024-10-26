import { BaseController } from './swapiBaseController';
import { SwapiVehicleService } from '../../services/swapi/swapiVehicleService';

export class VehiclesController extends BaseController {
    constructor(language?: string) {
        const useTranslation = language === 'es';
        super(new SwapiVehicleService(useTranslation));
    }
}
