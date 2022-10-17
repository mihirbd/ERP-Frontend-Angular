import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BalanceSheetService } from '../services/balance-sheet.service';

@Component({
  selector: 'app-balance-sheet',
  templateUrl: './balance-sheet.component.html',
  styleUrls: ['./balance-sheet.component.css']
})
export class BalanceSheetComponent implements OnInit {

  
  balanceSheet: any;
  constructor(private api: BalanceSheetService, private router: Router) { }

  ngOnInit(): void {
    this.getBAlanceSheetDetails();
  }

  date = new Date();
  balanceSheetForm = new FormGroup({
    'dateTime': new FormControl(this.date.toISOString(), Validators.required),
    'openingBalance': new FormControl('', Validators.required),
    'deposit': new FormControl('', Validators.required),
    'expenditure': new FormControl('', Validators.required),
    'totalBalance': new FormControl('', Validators.required),
  
  })

  //Save Bank Details
  saveBalanceSheet() {
    if (this.balanceSheetForm.valid) {
      this.api.SaveBalanceSheet(this.balanceSheetForm.value).subscribe(
        (res) => {
          alert("Balance Sheet created successfully")
          this.router.navigateByUrl("/accounts/balance-sheet");
          this.balanceSheetForm.reset();
        })
    }

  }


  //get information from Bank Details Table
  getBAlanceSheetDetails() {
    this.api.getBalanceSheet().subscribe((data) => { this.balanceSheet = data; });
  }


}
