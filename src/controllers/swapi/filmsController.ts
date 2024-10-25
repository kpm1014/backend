import { BaseController } from '../baseController';
import { SwapiFilmService } from '../../services/swapi/swapiFilmService';

export class FilmsController extends BaseController {
    constructor() {
        super(new SwapiFilmService());
    }
}
