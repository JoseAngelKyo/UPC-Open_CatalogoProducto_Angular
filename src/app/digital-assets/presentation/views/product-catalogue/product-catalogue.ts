import {inject, Component, OnInit} from '@angular/core';
import {ProductCard} from '../../components/product-card/product-card';
import {TranslatePipe} from '@ngx-translate/core';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import {ProductStoreService} from '../../../application/product-store.service';
import {MatButtonToggle, MatButtonToggleModule} from '@angular/material/button-toggle';

@Component({
  imports: [ProductCard, TranslatePipe, MatProgressSpinner, MatButtonModule, MatButtonToggleModule],
  selector: 'app-product-catalogue',
  templateUrl: './product-catalogue.html',
  styleUrls: ['./product-catalogue.css'],
})

export class ProductCatalogue implements OnInit {

  public readonly store = inject(ProductStoreService);

  ngOnInit(): void {
    this.store.loadProductsByQuery('phone', 12);
  }
  public onCategoryChange(query: string): void {
    this.store.loadProductsByQuery(query, 12);
  }
}
