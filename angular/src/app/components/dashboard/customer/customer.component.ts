import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit {
  @Input() customer: any;
  constructor(
    private customerService: CustomerService,
    private notificationService: NotificationService,
    private router: Router
  ) {}

  @Output() updateCustomer = new EventEmitter();
  ngOnInit(): void {}

  deleteCustomer(customer: any) {
    if (window.confirm('Are sure you want to delete this item ?')) {
      console.log('yes');

      this.customerService.deleteCustomer(customer.id).subscribe((response) => {
        console.log('deleted succefully', response);
        this.notificationService.showSuccess(
          'Deleted ',
          ' Deleted successfully'
        );
      });
    } else {
      console.log('no');
    }
  }

  editCustomer(id: any) {
    this.router.navigate(['update-customer/', id]);
  }
  navigateTo(id: any) {
    console.log(id);
  }
}
