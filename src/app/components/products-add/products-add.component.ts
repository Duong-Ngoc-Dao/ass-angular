import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.scss']
})
export class ProductsAddComponent {
constructor(private formBuilder: FormBuilder){

}
productForm = this. formBuilder.group({
  name: [''],
  price: [0]
})
onHandleSubmit() {
  if (this.productForm.valid) {
    console.log(this.productForm.value);
    
  }
}
}
