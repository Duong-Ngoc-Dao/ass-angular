import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.scss']
})
export class ProductsItemComponent {
@Input() product : any;
@Input() index: any;
@Output() onRemove: EventEmitter<any> = new EventEmitter();

removeItem(id: any) {
  this.onRemove.emit(id);
}

}
