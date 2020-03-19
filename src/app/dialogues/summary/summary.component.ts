import { Summary } from './../../Model/Summary';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  constructor() { }
  clientsummary: Summary ;
  ngOnInit() {
    this.clientsummary = {
      id: 0,
      summary: "",
    };

  }
  onsubmit(myform: NgForm) {
    console.log(this.clientsummary);
   JSON.parse(JSON.stringify(this.clientsummary));
    myform.reset();
  }
}
