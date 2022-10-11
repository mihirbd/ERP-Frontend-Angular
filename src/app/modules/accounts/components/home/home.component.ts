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
  
  constructor(private api: DepositService, private api2: ExpenditureService) { }

  ngOnInit(): void {
    this.getDeposit();
    //this.example();
    this.getExpenditure();
  }
  getDeposit() {
    this.api.getdeposit().subscribe((data) => { this.allDeposit = data; });
  }
  
  getExpenditure() {
    this.api2.getExpenditure().subscribe((data) => { this.allExpenditure = data; });
  }
  
  example() {
    let sum: any;
    for (let i = 0; i > Object.keys(this.allDeposit).length - 4; i--) {
      sum += this.allDeposit[i].deposit_amount
      console.log(i+' '+sum);
    }
    // Do stuff in case forEach has not returned
  }
  
}
