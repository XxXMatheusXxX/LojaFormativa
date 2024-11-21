import { Injectable } from '@angular/core';
import { Iproducts } from './iproducts';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Iproducts[] =[
    {id: 1, name: 'Yeezy 700 V3', price: 200.0, image_url: './image.png', description: 'The insole are confortable so you can'},
    {id: 2, name: 'Foam Runner', price: 100.0, image_url: './foam.webp', description: 'The insole are confortable so you can'},
    {id: 3, name: 'Yeezy Slide', price: 50.0, image_url: './slide.webp', description: 'The insole are confortable so you can'}
  ];
  
  getProducts(): Iproducts[]{
    return this.products;
  }
}
