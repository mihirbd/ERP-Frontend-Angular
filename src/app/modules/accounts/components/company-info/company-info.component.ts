import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PixelinfoService } from '../services/pixelinfo.service';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.css']
})
export class CompanyInfoComponent implements OnInit {
  allinfo: any;
  constructor(private api: PixelinfoService, private router: Router) { }

  ngOnInit(): void {
    this.getInfo();
  }

  companyInfoForms = new FormGroup({
    'company_name': new FormControl('', Validators.required),
    'email': new FormControl('', Validators.required),
    'phone': new FormControl('', Validators.required),
    'address': new FormControl('', Validators.required),
    'tin': new FormControl('', Validators.required),
    'bin': new FormControl('', Validators.required),
    'bsti': new FormControl('', Validators.required),
    'established_date': new FormControl('', Validators.required),
    'logo': new FormControl('', Validators.required)
  })

  //Save Pixel Info
  saveInfo() {
    if (this.companyInfoForms.valid) {
      this.api.InsertInfo(this.companyInfoForms.value).subscribe(
        (res) => {
          alert("Company Information created successfully")
          this.router.navigateByUrl("/accounts/company-info");
          this.companyInfoForms.reset();
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

  //get information from Pixel Info Table

  getInfo() {
    this.api.getInfo().subscribe((data) => { this.allinfo = data; });
  }


}
