import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepositService } from '../services/deposit.service';

@Component({
  selector: 'app-deposit-sort',
  templateUrl: './deposit-sort.component.html',
  styleUrls: ['./deposit-sort.component.css']
})
export class DepositSortComponent implements OnInit {

  allPurpose: any;
  allEmployee: any;
  allDetails: any;
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
