import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddUserService } from '../add-user/add-user.service';
import { BankService } from '../services/bank.service';
import { EmployeeService } from '../services/employee.service';
import { ExpenditureService } from '../services/expenditure.service';
import { PurposeService } from '../services/purpose.service';
import { Expenditure } from './Expenditure';

@Component({
  selector: 'app-expenditure',
  templateUrl: './expenditure.component.html',
  styleUrls: ['./expenditure.component.css']
})
export class ExpenditureComponent implements OnInit {

  //Data Accessor
  allPurpose: any;
  allDetails: any;
  allUser: any;
  allEmployee: any;

  constructor(private api: ExpenditureService, private api2: PurposeService, private router: Router, private api3: BankService, private api4: AddUserService, private api5: EmployeeService) { }

  ngOnInit(): void {
    this.getPurposeByType('Expenditure Purpose');
    this.getBankDetails();
    this.get();
    this.getEmployee();
  }

  expenditureForms = new FormGroup({
    'date_time': new FormControl('', Validators.required),
    'purpose': new FormControl('', Validators.required),
    'payment_to': new FormControl('', Validators.required),
    'payment_by': new FormControl('', Validators.required),
    'payment_method': new FormControl('', Validators.required),
    'payment_amount': new FormControl(null, Validators.required),
    'payment_details': new FormControl('', Validators.required),
    'payment_token': new FormControl('', Validators.required),
    'cost_type': new FormControl('', Validators.required),
  })

  //insert data
  saveExpenditure() {
    if (this.expenditureForms.valid) {
      let value = this.expenditureForms.value;

      let deposit: Expenditure= {
        date_time: value.date_time || '',
        purpose: { id: Number(value.purpose) || '' },
        payment_to: {id:Number(value.payment_to)},
        payment_by: value.payment_by || '',
        payment_method: value.payment_method || '',
        payment_amount: value.payment_amount||0,
        payment_details: value.payment_details||'',
        cost_type: value.cost_type||'',
        payment_token: value.payment_token||'',
      }


      this.api.saveExpenditure(deposit).subscribe(
        (res) => {
          alert("Deposit Save successfully")
          this.router.navigateByUrl("/accounts/expenditure-history");
          this.expenditureForms.reset();
        })
    }
  }

  //insert Image Base64
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
