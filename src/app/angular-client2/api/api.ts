export * from './maintenanceController.service';
import { MaintenanceControllerService } from './maintenanceController.service';
export * from './vehicleController.service';
import { VehicleControllerService } from './vehicleController.service';
export const APIS = [MaintenanceControllerService, VehicleControllerService];
