import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DepositService } from '../services/deposit.service';
import { ExpenditureService } from '../services/expenditure.service';

@Component({
  selector: 'app-weekly-transection',
  templateUrl: './weekly-transection.component.html',
  styleUrls: ['./weekly-transection.component.css']
})
export class WeeklyTransectionComponent implements OnInit {
  depositDateBetween: any;
  expenditureDateBetween: any;
  
  constructor(private api: DepositService, private api2: ExpenditureService, public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.getcurrAndLastDate();
  }


  now = new Date();
  date_time = this.now.getDate();

  //today_date = this.now.toISOString();
  

  // expenditure() {
    
  //   this.getExpenditureByDateBetween(this.date_time,this.pastdate);
  // }

   //get information by Date
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
    let last = first - 6;
     this.firstDay = new Date(curr.setDate(first)).toLocaleDateString();
    this.lastday = new Date(curr.setDate(last)).toLocaleDateString();
    
    let date =this.datepipe.transform(this.firstDay, 'yyyy-MM-dd');
    let date1 =this.datepipe.transform(this.lastday, 'yyyy-MM-dd');

    this.getDepositByDateBetween(date1, date)
    this.getExpByDateBetween(date1, date);
    
  }




}
