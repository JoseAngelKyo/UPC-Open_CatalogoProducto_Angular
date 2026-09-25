import { inject, Injectable, signal } from '@angular/core';
import { ProductService } from '../infrastructure/service/product.service';
import { Product } from '../domain/model/product.entity';

@Injectable({
  providedIn: 'root'
})
export class ProductStoreService {

  private readonly productService = inject(ProductService);

  private readonly _products = signal<Product[]>([]);
  private readonly _isLoading = signal<boolean>(false);
  private readonly _errorMessage = signal<string | null>(null);

  public readonly products = this._products.asReadonly();
  public readonly isLoading = this._isLoading.asReadonly();
  public readonly errorMessage = this._errorMessage.asReadonly();

  public loadProductsByQuery(
    query: string,
    limit: number = 12
  ): void {

    this._isLoading.set(true);
    this._errorMessage.set(null);

    this.productService.getProductsByQuery(query, limit).subscribe({

      next: (domainEntities) => {
        this._products.set(domainEntities);
        this._isLoading.set(false);
      },

      error: (error) => {
        console.error(error);
        this._errorMessage.set('Error al cargar los productos');
        this._isLoading.set(false);
      }

    });
  }
}
