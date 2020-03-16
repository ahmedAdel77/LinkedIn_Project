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



@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  ngOnInit(): void { }
  constructor(private dialog: MatDialog) { }

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
