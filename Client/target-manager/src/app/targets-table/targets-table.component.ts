import { Component, OnInit } from '@angular/core';
import { TargetModel } from '../models/TargetModel';
import { MatDialog } from '@angular/material/dialog'
import { CreateEditTagretDialogComponent } from '../create-edit-tagret-dialog/create-edit-tagret-dialog.component';
import { AUTO_STYLE } from '@angular/animations';

@Component({
  selector: 'app-targets-table',
  templateUrl: './targets-table.component.html',
  styleUrls: ['./targets-table.component.scss']
})
export class TargetsTableComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  targets: TargetModel[];

  ngOnInit(): void {
    this.targets = [new TargetModel(1,'test1','desc1', '20/10/2020', 0),
     new TargetModel(1,'test1','desc1', '20/10/2020', 0),
     new TargetModel(1,'test1','desc1', '20/10/2020', 0),
     new TargetModel(1,'test1','desc1', '20/10/2020', 0),
     new TargetModel(1,'test1','desc1', '20/10/2020', 0),
     new TargetModel(1,'test1','desc1', '20/10/2020', 0),
     new TargetModel(1,'test1','desc1', '20/10/2020', 0),
     new TargetModel(1,'test1','desc1', '20/10/2020', 0)]
  }

  openDialog(event){
    console.log(event)
    let dialogRef = this.dialog.open(CreateEditTagretDialogComponent, {
      width: '400px'
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    })
  }

}
