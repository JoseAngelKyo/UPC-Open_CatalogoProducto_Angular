import { Component, Input } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Product } from '../../../domain/model/product.entity';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  imports: [
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    TranslatePipe,
    DecimalPipe
  ],
  selector: 'app-product-card',
  styleUrl: './product-card.css',
  templateUrl: './product-card.html',
})
export class ProductCard {

  @Input({ required: true })
  product!: Product;

}
