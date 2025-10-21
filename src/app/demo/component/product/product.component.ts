// angular import
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// project import

import { CardComponent } from 'src/app/theme/shared/components/card/card.component';

@Component({
  selector: 'app-product',
  imports: [CommonModule, CardComponent],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {}
