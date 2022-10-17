import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DepositService } from '../services/deposit.service';
import { ExpenditureService } from '../services/expenditure.service';

@Component({
  selector: 'app-monthly-transection',
  templateUrl: './monthly-transection.component.html',
  styleUrls: ['./monthly-transection.component.css']
})
export class MonthlyTransectionComponent implements OnInit {

  depositDateBetween: any;
  expenditureDateBetween: any;
  
  constructor(private api: DepositService, private api2: ExpenditureService, public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.getcurrAndLastDate();
  }


  now = new Date();
  date_time = this.now.getDate();


  getDepositByDateBetween(date: any, date1:any) {
    this.api.getDepositByDateBetween(date, date1).subscribe((data) => {
      this.depositDateBetween = data;
    });
  }

  //get information from expenditure by Date Between
  getExpByDateBetween(date: any, date1:any) {
    this.api2.getExpenditureByDateBetween(date,date1).subscribe((data) => {
      this.expenditureDateBetween = data;
    });
    
  }

  firstDay: any;
  lastday: any;
  getcurrAndLastDate() { 
    let curr = new Date;
    let first = curr.getDate() - curr.getDay()+4;
    let last = first - 29;
     this.firstDay = new Date(curr.setDate(first)).toLocaleDateString();
    this.lastday = new Date(curr.setDate(last)).toLocaleDateString();
    
    let date =this.datepipe.transform(this.firstDay, 'yyyy-MM-dd');
    let date1 =this.datepipe.transform(this.lastday, 'yyyy-MM-dd');
    console.log(date1+' '+date);
    this.getDepositByDateBetween(date1, date)
    this.getExpByDateBetween(date1, date);
    
  }


}
