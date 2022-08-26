import { AuthService } from 'src/app/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  AllCustomer: any[] = [];

  last: boolean = false;
  pageNo: number = 0;
  pageSize: number = 0;
  totalElements: number = 0;
  totalPages: any;

  constructor(
    private customerService: CustomerService,
    private authService: AuthService
  ) {}
  ngOnInit(): void {
    this.authService.getUserrDeatils().subscribe((data) => {
      console.log('current user', data);
    });
    this.customerService.autoRefresh$.subscribe((customer) => {
      this.getAllCustomer();
    });
    this.getAllCustomer();
  }

  deleteCustomer(customer: any) {
    console.log('deleting');
  }

  getAllCustomer() {
    this.customerService.getAllCustomer().subscribe((data) => {
      console.log(data);
      this.setData(data);
    });
  }

  nextPage(n: any) {
    this.customerService.getAllCustomer(n).subscribe((data) => {
      console.log('updates value is ', data);
      this.setData(data);
    });
  }

  setData(data: any) {
    this.last = data.last;
    this.pageNo = data.pageNo;
    this.totalElements = data.totalElements;
    this.totalPages = Array(data.totalPages)
      .fill(0)
      .map((x, i) => i);
    this.AllCustomer = data.content;
    console.log('All customer ', this.AllCustomer);
  }
}
