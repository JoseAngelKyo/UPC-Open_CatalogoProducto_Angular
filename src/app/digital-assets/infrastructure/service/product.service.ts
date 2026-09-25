import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable, map } from 'rxjs';
import { ProductAssembler } from '../assembler/product.assembler';
import { ProductResource } from '../resource/product.resource';
import { Product } from '../../domain/model/product.entity';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.apiUrl}/search`;

  public getProductsByQuery(query: string, limit: number = 12): Observable<Product[]> {
    const params: any = new HttpParams()
      .set('q', query)
      .set('limit', limit.toString());

    return this.http.get<{ products: ProductResource[] }
    >(this.apiUrl, { params }).pipe(map(response => ProductAssembler.toEntitiesFromResources(response.products || []))
    );
  }

  public getProductById(id: number): Observable<Product> {
    return this.http.get<ProductResource>(`${environment.apiUrl}/products/${id}`).pipe(
      map(response => ProductAssembler.toEntityFromResource(response))
    );
  }
}
