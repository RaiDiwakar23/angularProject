import { Component } from '@angular/core';
import { ProductapisService } from '../../services/productapis.service';
import { CommonModule } from '@angular/common';
import { EllipsePipe } from '../../pipes/ellipse.pipe';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-allproducts',
  standalone: true,
  imports: [CommonModule, EllipsePipe, RouterLink],
  templateUrl: './allproducts.component.html',
  styleUrl: './allproducts.component.css',
})
export class AllproductsComponent {
  allProductData: any = [];
  constructor(private prodApis: ProductapisService, private router: Router) {}

  ngOnInit() {
    this.getProductData();
  }
  getProductData() {
    this.prodApis.getAllProducts().subscribe(
      (res: any) => {
        console.log(res);
        this.allProductData = res;
      },
      () => {
        alert('something Went wrong');
      }
    );
  }

  handleNavigation() {
    this.router.navigateByUrl('/createProduct');
  }

  handleRoute(id: any) {
    // this.router.navigateByUrl(`/single/${id}`);
    console.log(id);
  }
}
