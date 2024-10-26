import { BaseController } from './swapiBaseController';
import { SwapiFilmService } from '../../services/swapi/swapiFilmService';

export class FilmsController extends BaseController {
    constructor() {
        super(new SwapiFilmService());
    }
}
