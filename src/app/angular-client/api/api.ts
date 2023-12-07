export * from './brandController.service';
import { BrandControllerService } from './brandController.service';
export * from './modelController.service';
import { ModelControllerService } from './modelController.service';
export * from './vehicleController.service';
import { VehicleControllerService } from './vehicleController.service';
export const APIS = [BrandControllerService, ModelControllerService, VehicleControllerService];
