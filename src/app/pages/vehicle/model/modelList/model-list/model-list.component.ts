import { Component, OnInit } from '@angular/core';
import { ModelControllerService, ModelDto } from 'app/angular-client';
import { NewModelComponent } from '../../add-model/new-model/new-model.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-model-list',
  templateUrl: './model-list.component.html',
  styleUrls: ['./model-list.component.css']
})
export class ModelListComponent implements OnInit {
  displayedColumns: string[] = ['name','actions'];
  dataSource: ModelDto[] = []

  constructor(private modelService: ModelControllerService,
    private dialog:MatDialog) { }

  ngOnInit(): void {
    this.modelService.findModelList().subscribe(res => {
      console.log("modelList", res)
      this.dataSource = res
    })

  }
  addModel(){
    this.dialog.open(NewModelComponent, {
      width: "500px",
      height: "500px",
      disableClose: true,
      hasBackdrop: false,
    });
  }
}