import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehicleControllerService } from 'app/angular-client/api/vehicleController.service';


interface Product {
  name: string;
  category: string;
  description: string;
  price: number;
  // Autres propriétés
}
@Component({
  selector: 'app-mission-list',
  templateUrl: './mission-list.component.html',
  styleUrls: ['./mission-list.component.css']
})
export class MissionListComponent implements OnInit {
  missionList: any;



  products: Product[] = [
    {
      name: 'Clavier mécanique',
      category: 'Périphérique',
      description: 'Clavier mécanique pour une expérience de frappe améliorée.',
      price: 99.99
    },
    {
      name: 'Souris gamer',
      category: 'Périphérique',
      description: 'Souris optimisée pour le gaming avec boutons programmables.',
      price: 49.99
    },
    // Autres produits
  ];

  constructor(private VehicleService: VehicleControllerService,
    private route: Router,
  ) { }

  ngOnInit() {
    this.VehicleService.findMissionOrder().subscribe((res) => {
      console.log("missionlist",res);
      this.missionList = res;

    })
  }
  assign(id:number){
    this.route.navigate(['vehicle-list',id])
  }

}
