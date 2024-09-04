import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductapisService {
  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get('https://api.escuelajs.co/api/v1/products');
  }

  createProduct(payload: any) {
    return this.http.post('https://api.escuelajs.co/api/v1/products/', payload);
  }

  getSingleProduct(id: any) {
    return this.http.get(`https://api.escuelajs.co/api/v1/products/${id}`);
  }
}
