import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.scss']
})
export class ProductsDetailComponent {
@Input('data') product!: IProduct;
}
