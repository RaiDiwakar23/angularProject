import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ProductapisService } from '../../services/productapis.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css',
})
export class UpdateComponent {
  id: any = '';

  updateProduct = new FormGroup({
    title: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
    categoryId: new FormControl(''),
    images: new FormControl(''),
  });

  constructor(
    private prodService: ProductapisService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.activeRoute.snapshot.paramMap.get('id');
  }

  handleSubmit() {
    let newPayload = {
      ...this.updateProduct.value,
      images: [this.updateProduct.value.images],
    };
    this.prodService.updateProduct(this.id, newPayload).subscribe(
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
