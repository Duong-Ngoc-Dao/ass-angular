import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product'
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {
  status: boolean = false;
  productName = "";
  products: IProduct[] = []
  product!: IProduct;

  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe(data => {
      this.products = data
    }, error => console.log(error)
    )
  }

  getValue(e: any) {
    this.productName = e.target.value;
  }
  changStatus() {
    this.status = !this.status;
  }
  removeItem(id: any) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter(item => item.id ! == id)
    },(error) => {
      console.log(error.message);
      
    })
  }
}
