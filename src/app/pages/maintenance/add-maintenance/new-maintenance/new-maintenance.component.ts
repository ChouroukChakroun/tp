import { Component, OnInit } from '@angular/core';
import { MaintenanceControllerService, MaintenanceDto, VehicleControllerService, VehicleDto } from 'app/angular-client2';



@Component({
  selector: 'app-new-maintenance',
  templateUrl: './new-maintenance.component.html',
  styleUrls: ['./new-maintenance.component.css']
})
export class NewMaintenanceComponent implements OnInit {
  vehicleList:VehicleDto[]
  selectedTime:string
  x:string[]
  y:string[]
  hour:string=''
  minute:string
 numberHour: number
 numberMinute:number
  
  maintenanceDto: MaintenanceDto = {
    cost: 0,
    task: '',
    date: new Date(),
    status: '',
    vehicleModel: ''
  }

  constructor(private maintenanceService: MaintenanceControllerService,
    private vehicleService:VehicleControllerService) { }

  ngOnInit(): void {
    this.vehicleService.findVehicleList().subscribe(res=>{
      console.log("vehicleList", res)
      this.vehicleList=res
    })
    
  }

  submit() {
    this.x=this.selectedTime.split(':')
    console.log("selectedhour:", this.hour=this.x[0])
    this.numberHour=+this.hour
    console.log("selectedhourNumber:", this.numberHour)
    console.log("selectedminute:", this.y=this.x[1].split(' '))
    console.log("selectedhour:", this.minute=this.y[0])
    this.numberMinute=+this.minute
     this.maintenanceDto.date.setHours( this.numberHour)
    this.maintenanceDto.date.setMinutes( this.numberMinute)
   
    console.log("maintenence before", this.maintenanceDto.date)
    this.maintenanceService.addMaintenance(this.maintenanceDto).subscribe(res => {

      console.log("cc", this.maintenanceDto)
    })
  }

  

}
