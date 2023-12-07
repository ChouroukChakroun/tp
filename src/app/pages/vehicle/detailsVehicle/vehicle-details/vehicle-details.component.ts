import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleControllerService, VehicleDto } from 'app/angular-client';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {
vehicleId:number
vehicleDto :VehicleDto
  constructor(private router: ActivatedRoute,
    private vehicleService:VehicleControllerService) { }

  ngOnInit(): void {
    this.vehicleId = this.router.snapshot.params['id']
    this.vehicleService.findVehicleById(this.vehicleId).subscribe(res=>{
      console.log("vehicle",res)
      this.vehicleDto=res
    })
  }

}
