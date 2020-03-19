import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<EducationComponent>) { }

  ngOnInit(): void {
  }
 onNoClick(): void {
    this.dialogRef.close();
  }


}
