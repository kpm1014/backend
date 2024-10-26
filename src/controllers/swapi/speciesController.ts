import { BaseController } from './swapiBaseController';
import { SwapiSpeciesService } from '../../services/swapi/swapiSpeciesService';

export class SpeciesController extends BaseController {
    constructor() {
        super(new SwapiSpeciesService());
    }
}
