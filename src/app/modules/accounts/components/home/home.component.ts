import { Component, OnInit } from '@angular/core';
import { DepositService } from '../services/deposit.service';
import { ExpenditureService } from '../services/expenditure.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allDeposit: any;
  allExpenditure: any;
  depositAmountByDate: any;
  allAmount: any;
  expenditureAmountByDate: any;
  allExpenditureAmount: any;

  OpeningdepositBalance: any;
  OpeningExpenditureBalance: any;

  constructor(private api: DepositService, private api2: ExpenditureService) { }

  ngOnInit(): void {
    this.getDeposit();
    this.getExpenditure();
    
    this.todayDepositAmount();
    this.getdepositBalance();
    this.todayExpenditureAmount();
    this.getExpenditureBalance();

    this.getOpeningdepositBalance();
    this.getOpeningExpenditureBalance();
  }


 //get Deposit Information
  getDeposit() {
    this.api.getdeposit().subscribe((data) => { this.allDeposit = data; });
  }


  //get Expenditure Information
  getExpenditure() {
    this.api2.getExpenditure().subscribe((data) => { this.allExpenditure = data; });
  }
  

  now = new Date();
  date_time = this.now.toISOString();

  todayDepositAmount() {
   this.getDepositAmount(this.date_time); 
  }

  todayExpenditureAmount() {
    this.getExpenditureAmount(this.date_time); 
  }

  //get Deposit Amount by Date
  getDepositAmount(date: any) {
    this.api.getAmountByDate(date).subscribe((data) => {this.depositAmountByDate = data});
  }
  
  //get Expenditure Amount by Date
  getExpenditureAmount(date: any) {
    this.api2.getExpenditureAmountByDate(date).subscribe((data) => { this.expenditureAmountByDate = data });
    
  }




  getdepositBalance() {
    this.api.getDepositAmount().subscribe((data) => { this.allAmount = data; });
  }

  getOpeningdepositBalance() {
    this.api.getOpenigBalance().subscribe((data) => { this.OpeningdepositBalance = data; });
  }

  getExpenditureBalance() {
    this.api2.getExpenditureAmount().subscribe((data) => {this.allExpenditureAmount = data;
    });
  }

  getOpeningExpenditureBalance() {
    this.api2.getOpeningBalance().subscribe((data) => {this.OpeningExpenditureBalance = data;
    });
  }

   





  
}
