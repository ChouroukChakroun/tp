import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewVehicleComponent } from '../../add-vehicle/new-vehicle/new-vehicle.component';
import { NewModelComponent } from '../../model/add-model/new-model/new-model.component';
import { ModelControllerService, VehicleControllerService, VehicleDto } from 'app/angular-client';
import { ActivatedRoute, Router } from '@angular/router';
import { VehicleEditComponent } from '../../edit-vehicle/vehicle-edit/vehicle-edit.component';
interface Product {
  name: string;
  category: string;
  description: string;
  price: number;
  status:string;
  // Autres propriétés
}
@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

  products: Product[] = [
    {
      name: 'Clavier mécanique',
      category: 'Périphérique',
      description: 'Clavier mécanique pour une expérience de frappe améliorée.',
      price: 99.99,
      status:'available'
     
    },
    {
      name: 'Clavier mécanique',
      category: 'Périphérique',
      description: 'Clavier mécanique pour une expérience de frappe améliorée.',
      price: 99.99,
      status:'available'
      
    },
    {
      name: 'Souris gamer',
      category: 'Périphérique',
      description: 'Souris optimisée pour le gaming avec boutons programmables.',
      price: 49.99,
      status:'available'
      
    },
    // Autres produits
  ];
  vehicleListDto: VehicleDto[]
  modelName: string
  missionId: number
  displayedColumns: string[] = ['vin', 'placeNumber', 'kilometersNumber', 'model', 'status', 'actions']
  dataSource: Product[] = this.products
  selectedRow: any;
  vehicleDto: VehicleDto

  constructor(private dialog: MatDialog,
    private vehicleService: VehicleControllerService,
    private modelService: ModelControllerService,
    private router: ActivatedRoute,
    private route: Router) { }

  ngOnInit(): void {
    this.vehicleService.findVehicles().subscribe(res => {
      //this.dataSource = res
      console.log("vehicleList", this.dataSource)
      this.vehicleListDto = res

      for (var i = 0; i < this.vehicleListDto.length; i++) {
        this.modelService.findModelById(this.vehicleListDto[i].modelId).subscribe(res => {
          console.log("model", res)
          this.modelName = res.name
        })
      }
    })


  }
  addVehicle() {
    const addDialog=this.dialog.open(NewVehicleComponent, {
      width: "500px",
      height: "500px",
      disableClose: true,
      hasBackdrop: false,
    });
    addDialog.afterClosed().subscribe(res=>{
      this.vehicleService.findVehicles().subscribe(res => {
       // this.dataSource = res
        console.log("vehicleList", this.dataSource)
        this.vehicleListDto = res
  
        for (var i = 0; i < this.vehicleListDto.length; i++) {
          this.modelService.findModelById(this.vehicleListDto[i].modelId).subscribe(res => {
            console.log("model", res)
            this.modelName = res.name
          })
        }
      })
  
    })
  }

  edit(id: number) {
    this.dialog.open(VehicleEditComponent, {
      data: { name: id },
      width: "500px",
      height: "500px",
      disableClose: true,
      hasBackdrop: false,
    });
  }
  deleteVehicle(vehicleId: number) {
   /*Erreur*/ this.vehicleService.deleteVehicle(vehicleId).subscribe(res => {
    this.getvehicles()
     
    })

  }
  getvehicles(){
    this.vehicleService.findVehicles().subscribe(res => {
      console.log("vehicleList", res)
    //  this.dataSource = res
    })
  }

  assignVehicle(id: number) {
    this.missionId = this.router.snapshot.params['id'];
    console.log("missionId", this.missionId)
    this.vehicleService.assignVehicleToMission(this.missionId, id).subscribe(res => {
      console.log("vehicle assigned", res)
    })
  }

  onRowClick(row: any) {
    this.selectedRow = row;
    console.log('Row clicked:', row);
    this.route.navigate(['vehicle-details', row.id])

  }

  receiveMessage($event) {
    this.vehicleDto = $event


  }
}
