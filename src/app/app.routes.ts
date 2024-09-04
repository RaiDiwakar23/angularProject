import { Routes } from '@angular/router';
import { AllproductsComponent } from './components/allproducts/allproducts.component';
import { CreateproductComponent } from './components/createproduct/createproduct.component';
import { SingleProductComponent } from './components/single-product/single-product.component';

export const routes: Routes = [
  { path: '', component: AllproductsComponent },
  { path: 'createProduct', component: CreateproductComponent },
  { path: 'single/:id', component: SingleProductComponent },
];
