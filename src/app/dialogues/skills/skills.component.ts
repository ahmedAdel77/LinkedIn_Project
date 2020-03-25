import { Component, OnInit, Inject } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { Skill } from "./../../Model/skills";
import { SkillsServiceService } from "./skills-service.service";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"]
})
export class SkillsComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<SkillsComponent>,
    public skillsService: SkillsServiceService,
    @Inject(MAT_DIALOG_DATA) public data: any 
  ) {}
  skill = new Skill();
  skillsArr: Skill[] = [];
  editflag: boolean =false;
 
  ngOnInit(): void {
    if (this.data) {
      this.editflag=true;
       
       this.skill = this.skillsService.getbyId(this.data.empdata.id);
       this.skillsArr.push(this.skill);
       console.log(this.skillsArr +"emp dataaaaaaaaaaaaaa ya dinaaaaaaaa");
     }
     else {
       this.editflag=false;
       this.skillsArr = [];
     }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  onSubmit() {
    this.skillsService.add(JSON.parse(JSON.stringify(this.skillsArr)));
    console.log(JSON.stringify(this.skillsArr) + "tssssss"); 
    this.dialogRef.close();
  }
  onSave(skillTag: HTMLInputElement) {
    this.skill.id = this.skillsArr.length;
    console.log(this.skillsArr.length + "len");

    this.skillsArr.push(JSON.parse(JSON.stringify(this.skill)));
    console.log(this.skillsArr);
    skillTag.value = "";
  }
}
