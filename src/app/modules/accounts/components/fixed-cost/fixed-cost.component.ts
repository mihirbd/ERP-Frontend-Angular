import { Component, OnInit } from '@angular/core';
import { FixedCostService } from '../services/fixed-cost.service';

@Component({
  selector: 'app-fixed-cost',
  templateUrl: './fixed-cost.component.html',
  styleUrls: ['./fixed-cost.component.css'],
})
export class FixedCostComponent implements OnInit {
  fixedCost: any;

  constructor(private api: FixedCostService) {}

  ngOnInit(): void {
    this.fixedCost = JSON.parse(localStorage.getItem('px_exp_purpose') ?? '[]');
  }

  //get Purpose table Data
  // getExpenditureByPurpose(id: any) {
  //   this.api.getExpenditureByPurpose(id).subscribe((data) => {
  //     this.fixedCost = data;
  //   });
  // }
}
