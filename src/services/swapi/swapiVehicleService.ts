import { BaseService } from './baseService';
import { Vehicle, PaginatedResponse, Vehiculo, TranslatedPaginatedResponse } from '../../models';
import { VehicleTranslator } from '../../utils/translator/vehicleTranslator';

export class SwapiVehicleService extends BaseService {
  constructor(useTranslation: boolean = false) {
    super('vehicles', useTranslation ? new VehicleTranslator() : undefined);
  }

  getVehicles(page?: number): Promise<PaginatedResponse<Vehicle> | TranslatedPaginatedResponse<Vehiculo>> {
    return this.getAll<Vehicle, Vehiculo>(page);
  }

  getVehicle(id: string): Promise<Vehicle | Vehiculo> {
    return this.getById<Vehicle, Vehiculo>(id);
  }

  searchVehicles(query: string): Promise<PaginatedResponse<Vehicle> | TranslatedPaginatedResponse<Vehiculo>> {
    return this.search<Vehicle, Vehiculo>(query);
  }

  getVehicleSchema(): Promise<object> {
    return this.getSchema();
  }
}
