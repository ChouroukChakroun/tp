import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { VehicleControllerService, VehicleDto } from 'app/angular-client';

@Component({
  selector: 'app-vehicle-edit',
  templateUrl: './vehicle-edit.component.html',
  styleUrls: ['./vehicle-edit.component.css']
})
export class VehicleEditComponent implements OnInit {
  vehicleDto:VehicleDto={
    vin: '',
    kilometersNumber: 0,
    color: '',
    fuelType: '',
    placeNumber: 0
  }

  constructor(@Inject(MAT_DIALOG_DATA) public data: {name: number},
  private vehicleService:VehicleControllerService,
  private ref: MatDialogRef<VehicleEditComponent>) { }

  ngOnInit(): void {
    console.log("data",this.data)
    console.log("id",this.data.name)
    this.vehicleService.findVehicleById(this.data.name).subscribe(res=>{
      console.log("vehicle by id", res)
      this.vehicleDto=res
    })

  }
  onSubmit(){
    this.vehicleService.updateVehicle(this.data.name,this.vehicleDto).subscribe()
    this.ref.close()
  }

  cancel() {
    this.ref.close()
  }
}
