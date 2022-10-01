import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { RoleService } from '../services/role.service';
import { AddUserService } from './add-user.service';
import { User } from './User';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  
  allRole: any;

  constructor(private api: AddUserService, private api2: RoleService, private router: Router) { }

  ngOnInit(): void {
    this.getRole();
  }

  userForms = new FormGroup({
    'username': new FormControl('', Validators.required),
    'role': new FormControl('', Validators.required),
    'phone': new FormControl('', Validators.required),
    'email': new FormControl('', Validators.required),
    'password': new FormControl('', Validators.required),
    'image': new FormControl('', Validators.required),
  })

  //insert data
  userinsert() {
    if (this.userForms.valid) {
      let value = this.userForms.value;

      let user: User = {
        username: value.username || '',
        roles: [{ id: Number(value.role || '0') }],
        email: value.email || '',
        phone: value.phone || '',
        password: value.password || '',
        image: this.cardImageBase64 || ''
      }


      this.api.InsertUser(user).subscribe(
        (res) => {
          alert("User created successfully")
          this.router.navigateByUrl("/accounts/user-list");
          this.userForms.reset();
        })
    }

  }


  //get Role table Data
  getRole() {
    this.api2.getRoles().subscribe((data) => { this.allRole = data; });
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


}
