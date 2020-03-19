import { Component, OnInit } from "@angular/core";

import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { LanguageComponent } from '../dialogues/language/language.component';
import { SkillsComponent } from '../dialogues/skills/skills.component';
import { EducationComponent } from '../dialogues/education/education.component';
import { RequestRecommendationComponent } from '../dialogues/request-recommendation/request-recommendation.component';
import { SummaryComponent } from '../dialogues/summary/summary.component';
import { WorkExperienceComponent } from '../dialogues/work-experience/work-experience.component';
import { LinksComponent } from '../dialogues/links/links.component';
import{WorkExperiencesServeicesService}from'../dialogues/work-experience/work-experiences-serveices.service';
import { Experience } from "../Model/Experience";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {

  workplaces: Experience[];
  myexp: Experience;
  ngOnInit(): void {

    this.workplaces = this.workserv.getall();
      
   }
  constructor(private dialog: MatDialog, public workserv: WorkExperiencesServeicesService) { }


editDialog(e: any, workex: Experience){
  let arr = [LanguageComponent, SkillsComponent, EducationComponent,
    RequestRecommendationComponent, SummaryComponent, WorkExperienceComponent, LinksComponent]
  let temp: any = e + 'Component';
  // console.log(temp);
  let res = arr.filter(comp => comp.name == temp)
  this.myexp=this.workserv.getbyId(workex.id);
  console.log(this.myexp)
  console.log( res)
  const dialogRef = this.dialog.open(res[0], {
    width: "550px",
    data: {
    empdata: this.myexp
    // empdata:'hamada'
    }
  });
  dialogRef.afterClosed().subscribe(result=>{

    console.log(`here is the data result ${result}`);
  })
 
  console.log(workex);

}

  openDialog(e: any): void {
    let arr = [LanguageComponent, SkillsComponent, EducationComponent,
      RequestRecommendationComponent, SummaryComponent, WorkExperienceComponent, LinksComponent]
    let temp: any = e + 'Component';
    // console.log(temp);
    let res = arr.filter(comp => comp.name == temp)
    // console.log( res)
    const dialogRef = this.dialog.open(res[0], {
      width: "550px",
    });

  }

  openMedia() {

  }
}
