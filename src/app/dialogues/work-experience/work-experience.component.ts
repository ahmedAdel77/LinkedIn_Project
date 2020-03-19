import { ProfileComponent } from './../../profile/profile.component';
import { Component, OnInit, Input, Inject } from "@angular/core";
import { NgForm } from "@angular/forms";
import { EmploymentType } from '../../Model/EmploymentType';
import { Experience } from "./../../Model/Experience";
import { WorkExperiencesServeicesService } from "./work-experiences-serveices.service";
import { WorktypesService } from '../../features/worktypes.service';
import { inject } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: "app-work-experience",
  templateUrl: "./work-experience.component.html",
  styleUrls: ["./work-experience.component.scss"]
})
export class WorkExperienceComponent implements OnInit {
  //@Input() exp: Experience;

  constructor(public clientworkserv: WorkExperiencesServeicesService, public worktypes: WorktypesService,
    public dialogRef: MatDialogRef<ProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any 
  ) { }
  clientexperience: Experience;
  editflag: boolean =false;
  worktype: EmploymentType[];

  ngOnInit() {
    console.log(this.data);
    if (this.data) {
     this.editflag=true;
      this.clientexperience = this.data.empdata;
    }
    else {
      this.editflag=false;
      this.clientexperience = {
        id: 0,
        summary: "",
        title: "",
        EmploymentType: { id: null, type: '' },
        Name: "",
        location: "",
        startDate: null,
        endDate: null,
        headLine: "",
        Description: ""
      };
    }
    this.worktype = this.worktypes.getAll();
    console.log(this.worktype);
  }
  onsubmit(myform: NgForm) {
    console.log(this.clientexperience);
    this.clientworkserv.Add(JSON.parse(JSON.stringify(this.clientexperience)));
    myform.reset();
  }
  change() {


  }
  validateStartDate(myform: NgForm) {
    if (this.clientexperience.startDate > new Date()) {
      return true;
    } else return false;
  }

  validateEndDate(myform: NgForm) {
    if (this.clientexperience.endDate > new Date()) {
      return true;
    } else return false;
  }
}
