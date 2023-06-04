import { Component, OnInit } from '@angular/core';
import { Product } from '../Interfaces/Product';
import {Observable, map, interval, takeUntil, switchMap} from 'rxjs';
import {ProductsService} from '../Services/products.service'

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  productwithCategories$!:Observable<any>;
  constructor(private productwithCategories:ProductsService){}
  products:any[]=[]

  ngOnInit(): void {

  this.productwithCategories$=this.productwithCategories.productsWithCategory$
  }


}

