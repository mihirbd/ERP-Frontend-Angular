import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddUserService } from '../add-user/add-user.service';
import { User } from '../add-user/User';

declare var window: any;
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  allUser: User[] = [];
  deleteModal: any;
  idTodelete: number = 0;



  constructor(private api: AddUserService, private router: Router) { }

  getUser: any;
  ngOnInit(): void {

    // this.api.getUser().subscribe((res) => {
    //   this.getUser = res.data;
    // })
    this.get();


  }


  get() {
    this.api.get().subscribe((data) => { this.allUser = data; });
  }


  delete(id: any) {

    if (window.confirm('Are sure you want to delete this item ?')) {
      this.api.delete(id)
        .subscribe({
          next: data => {
            alert('There was an error!');
          },
          error: error => {
            alert('Delete successful');
            this.get();
            this.router.navigateByUrl("/accounts/user-list");
          }
        });
    }
  }

}
