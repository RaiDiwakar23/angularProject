import { Component } from '@angular/core';
import { ProductapisService } from '../../services/productapis.service';

@Component({
  selector: 'app-single-product',
  standalone: true,
  imports: [],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css',
})
export class SingleProductComponent {
  singleProduct: any = {};
  ngOnInit() {
    this.getProduct();
  }
  constructor(private myService: ProductapisService) {}
  getProduct() {
    this.myService.getSingleProduct().subscribe(
      (res) => {
        console.log(res);
        this.singleProduct = res;
      },
      () => {
        alert('Something went wrong');
      }
    );
  }
}
