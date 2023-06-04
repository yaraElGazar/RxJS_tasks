import { Component, OnInit } from '@angular/core';
import { Product } from '../Interfaces/Product';
import {Observable, map, interval, takeUntil, switchMap} from 'rxjs';
import {Products} from '../Services/products.service'

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  
  constructor(private productService: Products) {}

  count: number = 0;

  products$: Observable<any> = new Observable();
  products: [] = [];

  ngOnInit() : void {
    // this.products$ = this.productService.getAllProducts().pipe(map(response => response.products));

    this.products$ = interval(1000).pipe(
      switchMap(() => this.productService.getAllProducts()),
      map(response => response.products)
    );


}

}

