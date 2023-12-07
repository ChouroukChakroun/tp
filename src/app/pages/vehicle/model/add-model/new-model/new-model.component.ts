import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ModelControllerService, ModelDto } from 'app/angular-client';
import { BrandControllerService } from 'app/angular-client/api/brandController.service';
import { BrandDto } from 'app/angular-client/model/brandDto';
import { VehicleListComponent } from 'app/pages/vehicle/vehicle-list/vehicleList_1/vehicle-list.component';



@Component({
  selector: 'app-new-model',
  templateUrl: './new-model.component.html',
  styleUrls: ['./new-model.component.css']
})
export class NewModelComponent implements OnInit {
  brandList: BrandDto[] = []
  selectedValue: string = ""
  inputSelected:string=""
  modelDto:ModelDto={
    brandId: 0,
    name:''
  }
  constructor(private brandService: BrandControllerService,
    private modelService: ModelControllerService,
    private ref: MatDialogRef<NewModelComponent>
    ) { }

  ngOnInit(): void {
    this.brandService.findBrandList().subscribe(res => {
      console.log(res)
      this.brandList = res
      console.log("dd", this.brandList)
      console.log("h???", this.selectedValue)

    })
  }
  addModel() {
    this.brandService.findBrandByName(this.selectedValue).subscribe(res => {
      console.log(res.id)
      this.modelDto.brandId=res.id
      this.modelDto.name=this.inputSelected
      this.modelService.addModel(this.modelDto).subscribe(res=>{
        console.log("model",res)
     
      })
      this.ref.close()
    })
   
    
  }
  close(){
    this.ref.close()
  }

}
