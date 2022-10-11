import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpenditureService } from '../services/expenditure.service';

@Component({
  selector: 'app-expenditure-history',
  templateUrl: './expenditure-history.component.html',
  styleUrls: ['./expenditure-history.component.css']
})
export class ExpenditureHistoryComponent implements OnInit {

  
  constructor(private api:ExpenditureService, http:Router) { }
  allExpenditure: any;
  ngOnInit(): void {
    this.getDeposit();
  }

  getDeposit() {
    this.api.getExpenditure().subscribe((data) => { this.allExpenditure = data; });
   }
  
  delete() { }


}
