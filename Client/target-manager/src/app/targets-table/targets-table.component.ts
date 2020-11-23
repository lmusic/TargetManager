import { Component, OnInit } from '@angular/core';
import { TargetModel } from '../models/TargetModel';
import { MatDialog } from '@angular/material/dialog'
import { CreateEditTagretDialogComponent } from '../create-edit-tagret-dialog/create-edit-tagret-dialog.component';
import { AUTO_STYLE } from '@angular/animations';
import { HttpService } from '../services/httpService';
import { map, tap } from 'rxjs/internal/operators'
@Component({
  selector: 'app-targets-table',
  templateUrl: './targets-table.component.html',
  styleUrls: ['./targets-table.component.scss']
})
export class TargetsTableComponent implements OnInit {

  constructor(public dialog: MatDialog, private httpService: HttpService) { }

  targets: TargetModel[];

  ngOnInit(): void {
    this.httpService.getTargets().subscribe((result: TargetModel[]) => {
      this.targets = result;
    });
  }

  openDialog(event){
    console.log(event)
    let dialogRef = this.dialog.open(CreateEditTagretDialogComponent, {
      width: '400px'
    })

    dialogRef.afterClosed().subscribe(result => {
      this.httpService.addTarget(result).subscribe(result => {
        console.log(result);
        this.httpService.getTargets().subscribe((result: TargetModel[]) => {
          this.targets = result;
        })
      })
    })
  }

}
