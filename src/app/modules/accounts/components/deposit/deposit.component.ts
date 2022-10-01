import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddUserService } from '../add-user/add-user.service';
import { BankService } from '../services/bank.service';
import { DepositService } from '../services/deposit.service';
import { EmployeeService } from '../services/employee.service';
import { PurposeService } from '../services/purpose.service';
import { Deposit } from './Deposit';
@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']

})
export class DepositComponent implements OnInit {

  //Data Accessor
  allPurpose: any;
  allDetails: any;
  allUser: any;
  allEmployee: any;

  constructor(private api: DepositService, private api2: PurposeService, private router: Router, private api3: BankService, private api4: AddUserService, private api5: EmployeeService) { }

  ngOnInit(): void {
    this.getPurposeByType('Deposit Purpose');
    this.getBankDetails();
    this.get();
    this.getEmployee();
  }

  depositForms = new FormGroup({
    'date_time': new FormControl('', Validators.required),
    'purpose': new FormControl('', Validators.required),
    'deposit_to': new FormControl('', Validators.required),
    'deposit_by': new FormControl('', Validators.required),
    'deposit_method': new FormControl('', Validators.required),
    'deposit_amount': new FormControl(null, Validators.required),
    'deposit_details': new FormControl('', Validators.required),
    'deposit_token': new FormControl('', Validators.required),
  })

  //insert data
  savedeposit() {
    if (this.depositForms.valid) {
      let value = this.depositForms.value;

      let deposit: Deposit = {
        date_time: value.date_time || '',
        purpose: { id: Number(value.purpose) || '' },
        deposit_to: value.deposit_to ||'',
        deposit_by: {id:Number(value.deposit_by)},
        deposit_method: value.deposit_method || '',
        deposit_amount: value.deposit_amount||0,
        deposit_details: value.deposit_details||'',
        deposit_token: value.deposit_token||'',
      }


      this.api.saveDeposit(deposit).subscribe(
        (res) => {
          alert("Deposit Save successfully")
          this.router.navigateByUrl("/accounts/user-list");
          this.depositForms.reset();
        })
    }
  }

  //inser Image Base64
  cardImageBase64: any;
  isImageSaved?: boolean;
  CreateBase64String(fileInput: any) {
    if (fileInput.target.files && fileInput.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = rs => {
          const imgBase64Path = e.target.result;
          this.cardImageBase64 = imgBase64Path;
          this.isImageSaved = true;
        };
      };
      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }



  //get Purpose table Data
  getPurposeByType(type:any) {
    this.api2.getPurposeByType(type).subscribe((data) => { this.allPurpose = data; });
  }

   //get information from Bank Details Table
   getBankDetails() {
    this.api3.getDetails().subscribe((data) => { this.allDetails = data; });
   }
  
  //get information from User Table
   get() {
    this.api4.get().subscribe((data) => { this.allUser = data; });
   }
  
  //get information from User Table
  getEmployee() {
    this.api5.getEmployee().subscribe((data) => { this.allEmployee = data; });
  }



}
