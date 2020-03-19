import { Summary } from './../../Model/Summary';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SummaryService {
  clientsummary: Summary ;
  constructor() { }

}
