import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CreateEditForm } from '../models/create-edit-form';

@Component({
  selector: 'app-create-edit-tagret-dialog',
  templateUrl: './create-edit-tagret-dialog.component.html',
  styleUrls: ['./create-edit-tagret-dialog.component.scss']
})
export class CreateEditTagretDialogComponent implements OnInit {

  form;

  constructor(
    public dialogRef: MatDialogRef<CreateEditTagretDialogComponent>,
    ) {}



  ngOnInit(): void {
    this.form = new CreateEditForm();
  }

  closeDialog() {
    this.dialogRef.close('Pizza!');
  }

  submit(){
    debugger;
    console.log(this.form.value);
  }

}
