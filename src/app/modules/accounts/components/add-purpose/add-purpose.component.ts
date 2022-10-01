import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PurposeService } from '../services/purpose.service';

@Component({
  selector: 'app-add-purpose',
  templateUrl: './add-purpose.component.html',
  styleUrls: ['./add-purpose.component.css']
})
export class AddPurposeComponent implements OnInit {

  purposeType: any;

  constructor(private api: PurposeService, private router: Router) { }

  ngOnInit(): void {
    this.getPurpose();
  }

  purposeForm = new FormGroup({
    'purpose': new FormControl('', Validators.required),
    'purpose_type': new FormControl('', Validators.required),
  })

  //Save Purpose
  savePurpose() {
    if (this.purposeForm.valid) {
      this.api.savePurpose(this.purposeForm.value).subscribe(
        (res) => {
          alert("Purpose created successfully")
          
          this.getPurpose();
          this.router.navigateByUrl("/accounts/add-purpose");
          this.purposeForm.reset();
        })
    }

  }


  //get information from Purpose Table
  getPurpose() {
    this.api.getPurpose().subscribe((data) => { this.purposeType = data; });
  }

  //get information by Type
  getPurposeByType(type: any) {
    this.api.getPurposeByType(type).subscribe((data) => { this.purposeType = data; });
  }
  

  //delete information by id
  delete(id: any) {

    if (window.confirm('Are sure you want to delete this item ?')) {
      this.api.deletePurpose(id)
        .subscribe({
          next: data => {
            alert('There was an error!');
          },
          error: error => {
            alert('Delete successful');
            this.getPurpose();
            this.router.navigateByUrl("/accounts/add-purpose");
          }
        });
    }
  }

}
