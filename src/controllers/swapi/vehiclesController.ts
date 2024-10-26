import { BaseController } from './swapiBaseController';
import { SwapiVehicleService } from '../../services/swapi/swapiVehicleService';

export class VehiclesController extends BaseController {
    constructor() {
        super(new SwapiVehicleService());
    }
}
