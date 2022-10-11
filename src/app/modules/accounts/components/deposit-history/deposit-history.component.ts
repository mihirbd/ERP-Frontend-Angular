import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepositService } from '../services/deposit.service';

@Component({
  selector: 'app-deposit-history',
  templateUrl: './deposit-history.component.html',
  styleUrls: ['./deposit-history.component.css']
})
export class DepositHistoryComponent implements OnInit {

  constructor(private api:DepositService, http:Router) { }
  allDeposit: any;
  allAmount: any;
  ngOnInit(): void {
    this.getDeposit();
    this.getDepositAmount();
  }

  getDeposit() {
    this.api.getdeposit().subscribe((data) => { this.allDeposit = data; });
  }
  
  getDepositAmount() {
    this.api.getDepositAmount().subscribe((data) => { this.allAmount = data; });
  }

  
  delete() { }

}
