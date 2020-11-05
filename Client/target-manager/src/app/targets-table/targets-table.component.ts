import { Component, OnInit } from '@angular/core';
import { Target } from '../models/model';

@Component({
  selector: 'app-targets-table',
  templateUrl: './targets-table.component.html',
  styleUrls: ['./targets-table.component.scss']
})
export class TargetsTableComponent implements OnInit {

  constructor() { }

  targets: Target[];

  ngOnInit(): void {
    this.targets = [new Target(1,'test1','desc1', '20/10/2020', 0),
     new Target(1,'test1','desc1', '20/10/2020', 0),
     new Target(1,'test1','desc1', '20/10/2020', 0),
     new Target(1,'test1','desc1', '20/10/2020', 0),
     new Target(1,'test1','desc1', '20/10/2020', 0),
     new Target(1,'test1','desc1', '20/10/2020', 0),
     new Target(1,'test1','desc1', '20/10/2020', 0),
     new Target(1,'test1','desc1', '20/10/2020', 0)]
  }

}
