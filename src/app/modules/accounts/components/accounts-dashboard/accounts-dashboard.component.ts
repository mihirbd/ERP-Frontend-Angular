import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FixedCostService } from '../services/fixed-cost.service';

@Component({
  selector: 'app-accounts-dashboard',
  templateUrl: './accounts-dashboard.component.html',
  styleUrls: ['./accounts-dashboard.component.css'],
})
export class AccountsDashboardComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private api: FixedCostService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  logout(): void {
    this.auth.logout();
  }

  filterIni(id: any) {
    this.api.getExpenditureByPurpose(id).subscribe((data) => {
      localStorage.setItem('px_exp_purpose', JSON.stringify(data));
      this.router.navigate(['/accounts/fixed-cost']);
      window.location.reload();
    });
  }
}
