import { Component } from '@angular/core';
import { ProductapisService } from '../../services/productapis.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-single-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css',
})
export class SingleProductComponent {
  singleProduct: any = {};
  id: any = '';
  ngOnInit() {
    this.id = this.activeRoute.snapshot.paramMap.get('id');

    this.getProduct();
  }

  //! Activated route is a service used to access the url parameters or query parameters
  constructor(
    private myService: ProductapisService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}
  getProduct() {
    this.myService.getSingleProduct(this.id).subscribe(
      (res) => {
        console.log(res);
        this.singleProduct = res;
      },
      () => {
        alert('Something went wrong');
      }
    );
  }

  handleDelete(id: any) {
    let confirmation = confirm('Are you sure???');
    if (confirmation) {
      this.myService.deleteSingle(id).subscribe(
        (res: any) => {
          if (res) {
            this.router.navigateByUrl('/');
          }
        },
        () => {
          alert('Something went wrong');
        }
      );
    }
  }

  handleNavigate(id: any) {
    this.router.navigateByUrl(`/update/${id}`);
  }
}
