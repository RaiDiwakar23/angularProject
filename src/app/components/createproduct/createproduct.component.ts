import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProductapisService } from '../../services/productapis.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createproduct',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './createproduct.component.html',
  styleUrl: './createproduct.component.css',
})
export class CreateproductComponent {
  createProduct = new FormGroup({
    title: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
    categoryId: new FormControl(''),
    images: new FormControl(''),
  });

  constructor(
    private prodService: ProductapisService,
    private router: Router
  ) {}

  // !SPREAD OPERATOR

  handleSubmit() {
    console.log(this.createProduct.value);
    // let newPayload = {
    //   title: this.createProduct.value.title,
    //   price: this.createProduct.value.price,
    //   description: this.createProduct.value.description,
    //   categoryId: this.createProduct.value.categoryId,
    //   images: [this.createProduct.value.images],
    // };

    //!spread way
    let newPayload = {
      ...this.createProduct.value,
      images: [this.createProduct.value.images],
    };
    this.prodService.createProduct(newPayload).subscribe(
      (res) => {
        console.log(res);
        this.router.navigateByUrl('/');
      },
      () => {
        alert('Something went wrong');
      }
    );
  }
}
