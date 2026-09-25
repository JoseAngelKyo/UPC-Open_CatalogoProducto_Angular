import { ProductResource } from '../resource/product.resource';
import { Product } from '../../domain/model/product.entity';

export class ProductAssembler {
  public static toEntityFromResource(resource: ProductResource): Product {
    return new Product(
      resource.id,
      resource.title,
      resource.description,
      resource.category,
      resource.price,
      resource.rating,
      resource.thumbnail
    );
  }

  public static toEntitiesFromResources(resources: ProductResource[]): Product[] {
    return resources ? resources.map((res) => this.toEntityFromResource(res)) : [];
  }
}
