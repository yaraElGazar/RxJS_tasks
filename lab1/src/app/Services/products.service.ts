import { Product } from "../Interfaces/Product";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';


@Injectable({
    providedIn: 'root'
  })
export class Products {
    constructor(private readonly myClient:HttpClient) { }

    counter: number = 0;

    //API_URL
    private readonly API_URL = "https://dummyjson.com/products";

    //METHODS
    getAllProducts():Observable<any>{
        return this.myClient.get<any[]>(this.API_URL);
    }
}