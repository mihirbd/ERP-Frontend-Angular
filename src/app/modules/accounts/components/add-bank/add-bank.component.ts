import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BankService } from '../services/bank.service';

@Component({
  selector: 'app-add-bank',
  templateUrl: './add-bank.component.html',
  styleUrls: ['./add-bank.component.css']
})
export class AddBankComponent implements OnInit {

  allDetails: any;
  constructor(private api: BankService, private router: Router) { }

  ngOnInit(): void {
    this.getBankDetails();
  }

  bankDetailsForm = new FormGroup({
    'bank_name': new FormControl('', Validators.required),
    'ac_no': new FormControl('', Validators.required),
    'phone': new FormControl('', Validators.required),
    'branch': new FormControl('', Validators.required),
    'bank_type': new FormControl('', Validators.required)
    
  })

  //Save Bank Details
  saveBankDetails() {
    if (this.bankDetailsForm.valid) {
      this.api.SaveInfo(this.bankDetailsForm.value).subscribe(
        (res) => {
          alert("Bank Information created successfully")
          this.router.navigateByUrl("/accounts/add-bank");
          this.bankDetailsForm.reset();
        })
    }

  }


  //get information from Bank Details Table
  getBankDetails() {
    this.api.getDetails().subscribe((data) => { this.allDetails = data; });
  }


}
