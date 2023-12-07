import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewMaintenanceComponent } from '../../add-maintenance/new-maintenance/new-maintenance.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maintenance-list',
  templateUrl: './maintenance-list.component.html',
  styleUrls: ['./maintenance-list.component.css']
})
export class MaintenanceListComponent implements OnInit {
  displayedColumns: string[] = ['task', 'date', 'time', 'description','status','cost','actions']
  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  addMaintenance(){
    this.route.navigate(['new maintenance'])
  }
}
