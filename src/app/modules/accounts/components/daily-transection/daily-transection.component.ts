import { Component, OnInit } from '@angular/core';
import { DepositService } from '../services/deposit.service';
import { ExpenditureService } from '../services/expenditure.service';

@Component({
  selector: 'app-daily-transection',
  templateUrl: './daily-transection.component.html',
  styleUrls: ['./daily-transection.component.css']
})
export class DailyTransectionComponent implements OnInit {
 
  depositDate: any;
  expenditureDate: any;
  
  constructor(private api: DepositService, private api2: ExpenditureService) { }

  ngOnInit(): void {
    this.deposit();
  }

  now = new Date();
  date_time = this.now.toISOString();
  
  deposit() {
    this.getDepositByDate(this.date_time);
  }

  expenditure() {
    this.getExpenditureByDate(this.date_time);
  }

   //get information by Date
  getDepositByDate(date: any) {
    this.api.getDepositByDate(date).subscribe((data) => {
      this.depositDate = data;
    });
  }

  //get information from expenditure by Date
  getExpenditureByDate(date: any) {
    this.api2.getExpenditureByDate(date).subscribe((data) => {
      this.expenditureDate = data;
    });
    
  }
  

}
