// angular import
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

// icons
import { IconService } from '@ant-design/icons-angular';
import { FallOutline, GiftOutline, MessageOutline, RiseOutline, SettingOutline } from '@ant-design/icons-angular/icons';
import { CardComponent } from 'src/app/theme/shared/components/card/card.component';
import { CustomerService } from 'src/app/services/customer.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

@Component({
  selector: 'app-default',
  imports: [
    CommonModule,
    CardComponent
  ],
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent {
  private iconService = inject(IconService);

  // constructor
  constructor(private http: HttpClient) {
  }

  customers = new CustomerService(this.http).customers;
}
