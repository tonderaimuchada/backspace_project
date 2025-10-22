// angular import
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// project import

import { CardComponent } from 'src/app/theme/shared/components/card/card.component';
import { HttpClient } from '@angular/common/http';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  imports: [CommonModule, CardComponent],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  constructor(private http: HttpClient) {}
  
  products = new ProductService(this.http).products;
}
