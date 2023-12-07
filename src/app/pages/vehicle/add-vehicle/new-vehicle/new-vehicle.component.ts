import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModelControllerService, ModelDto } from 'app/angular-client';
import { VehicleControllerService } from 'app/angular-client/api/vehicleController.service';
import { VehicleDto } from 'app/angular-client/model/vehicleDto';
import { NewModelComponent } from '../../model/add-model/new-model/new-model.component';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-vehicle',
  templateUrl: './new-vehicle.component.html',
  styleUrls: ['./new-vehicle.component.css']
})
export class NewVehicleComponent implements OnInit {
  selectedValue: string
  modelList: ModelDto[]
  vehicleDto: VehicleDto = {
    vin: '',
    kilometersNumber: 0,
    color: '',
    fuelType: '',
    placeNumber: 0
  }
 
  @Output() MessageEvent = new EventEmitter<VehicleDto>()


  constructor(private vehicleService: VehicleControllerService,
    private ref: MatDialogRef<NewVehicleComponent>,
    private modelService: ModelControllerService,
    private dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private route:Router) { }

  ngOnInit(): void {
    this.modelService.findModelList().subscribe(res => {
      console.log("modelList", res)
      this.modelList = res

    })
  }
  onSubmit() {
    this.modelService.findModelByName(this.selectedValue).subscribe(res => {
      console.log("find model by name", res)
      this.vehicleDto.modelId = res.modelId

      this.vehicleService.addVehicle(this.vehicleDto).subscribe(res => {
        console.log("ee", res)
        this.vehicleDto = res
        this.route.navigate(['/vehicle-list'])
        this.ref.close()
        
        this.MessageEvent.emit(this.vehicleDto)

      })
    })

  }
  cancel() {
    this.ref.close()
  }
  addModel() {
    this.dialog.open(NewModelComponent, {
      width: "500px",
      height: "500px",
      disableClose: true,
      hasBackdrop: false,
    });
  }
  filterNonNumericInput(event: KeyboardEvent) {
    const input = event.key;
    const isNumeric = /^[0-9]+$/.test(input)||input==="Backspace";
    console.log("cc",input)  
    if (!isNumeric) {
      this._snackBar.open('Veuillez entrer un nombre valide', 'Fermer', {
        duration: 2000,
        verticalPosition: 'top'
      });
      event.preventDefault();
    }
  }
}
