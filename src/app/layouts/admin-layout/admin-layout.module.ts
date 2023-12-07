import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { IconsComponent } from '../../icons/icons.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { MissionListComponent } from 'app/pages/mission/mission-list/mission-list.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { VehicleListComponent } from 'app/pages/vehicle/vehicle-list/vehicleList_1/vehicle-list.component';
import { NewVehicleComponent } from 'app/pages/vehicle/add-vehicle/new-vehicle/new-vehicle.component';
import {MatIconModule} from '@angular/material/icon';
import { NewModelComponent } from 'app/pages/vehicle/model/add-model/new-model/new-model.component';
import { VehicleEditComponent } from 'app/pages/vehicle/edit-vehicle/vehicle-edit/vehicle-edit.component';
import { MatTableModule } from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { ModelListComponent } from 'app/pages/vehicle/model/modelList/model-list/model-list.component';
import { VehicleDetailsComponent } from 'app/pages/vehicle/detailsVehicle/vehicle-details/vehicle-details.component';
import { NewMaintenanceComponent } from 'app/pages/maintenance/add-maintenance/new-maintenance/new-maintenance.component';
import { MaintenanceListComponent } from 'app/pages/maintenance/maintenanceList/maintenance-list/maintenance-list.component';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSnackBarModule} from '@angular/material/snack-bar'
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatSelectModule,
    MatTooltipModule,
    MatDialogModule,
    MatGridListModule,
    MatIconModule,
    MatTableModule,
    MatCardModule,
    NgxMaterialTimepickerModule,
    MatDatepickerModule,
    MatNativeDateModule

 
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    IconsComponent,
    NotificationsComponent,
    MissionListComponent,
    VehicleListComponent, 
    NewVehicleComponent,
    NewModelComponent,  
    VehicleEditComponent,
    ModelListComponent,
    VehicleDetailsComponent,
    NewMaintenanceComponent,
    MaintenanceListComponent,

  
    

  ]
})

export class AdminLayoutModule {}
