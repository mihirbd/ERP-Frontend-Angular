import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  allRole: any;
  constructor() { }

  ngOnInit(): void {
  }

  userinsert() { }

  userForms = new FormGroup([]);


  CreateBase64String(fileInput:any) { }

}
