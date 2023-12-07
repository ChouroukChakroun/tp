import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { IconsComponent } from '../../icons/icons.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { MissionListComponent } from 'app/pages/mission/mission-list/mission-list.component';
import { VehicleListComponent } from 'app/pages/vehicle/vehicle-list/vehicleList_1/vehicle-list.component';
import { ModelListComponent } from 'app/pages/vehicle/model/modelList/model-list/model-list.component';
import { VehicleDetailsComponent } from 'app/pages/vehicle/detailsVehicle/vehicle-details/vehicle-details.component';
import { NewMaintenanceComponent } from 'app/pages/maintenance/add-maintenance/new-maintenance/new-maintenance.component';
import { MaintenanceListComponent } from 'app/pages/maintenance/maintenanceList/maintenance-list/maintenance-list.component';


export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'mission-list',     component: MissionListComponent },
    { path: 'vehicle-list/:id',     component: VehicleListComponent },
    { path: 'vehicle-list',     component: VehicleListComponent },
    { path: 'maintenance-list',     component: MaintenanceListComponent},
    { path: 'new maintenance',     component: NewMaintenanceComponent},
    { path: 'model-list',     component: ModelListComponent},
    { path: 'vehicle-details/:id',     component: VehicleDetailsComponent},
    { path: 'icons',          component: IconsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    

];
