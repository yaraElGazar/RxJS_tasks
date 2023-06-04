import { Injectable } from '@angular/core';
import { delay, from, of, map, take, tap, Observable ,combineLatest} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: any[] = [
    {
      id: 1,
      title: 'OPPOF19',
      description: 'OPPO F19 is officially announced on April 2021.',
      price: 280,
      discountPercentage: 17.91,
      rating: 4.3,
      stock: 123,
      brand: 'OPPO',
      catId:2


    },
    {
      id: 2,
      title: 'Huawei P30',
      description:
        'Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.',
      price: 499,
      discountPercentage: 10.58,
      rating: 4.09,
      stock: 32,
      brand: 'Huawei',
      catId:3

    },
    {
      id: 3,
      title: 'MacBook Pro',
      description:
        'MacBook Pro 2021 with mini-LED display may launch between September, November',
      price: 1749,
      discountPercentage: 11.02,
      rating: 4.57,
      stock: 83,
      brand: 'Apple',
      catId:1

    },
    {
      id: 4,
      title: 'Samsung Galaxy Book',
      description:
        'Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched',
      price: 1499,
      discountPercentage: 4.15,
      rating: 4.25,
      stock: 50,
      brand: 'Samsung',
      catId:1

    },
    {
      id: 5,
      title: 'Microsoft Surface Laptop 4',
      description:
        'Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.',
      price: 1499,
      discountPercentage: 10.23,
      rating: 4.43,
      stock: 68,
      brand: 'Microsoft Surface',
      catId:2
    },
    {
      id: 6,
      title: 'Infinix INBOOK',
      description:
        'Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty',
      price: 1099,
      discountPercentage: 11.83,
      rating: 4.54,
      stock: 96,
      brand: 'Infinix',
      catId:4

    }

  ];
  categories: any[] = [
    { id: 1, name: 'smartphones' },
    { id: 2, name: 'laptops' },
    { id: 3, name: 'phone' },
    { id: 4, name: 'smartphones' },
    { id: 5, name: 'pc' },

  ]
  constructor() { }

  products$: Observable<any> = of(this.products)
  categories$: Observable<any> = of(this.categories)
  product:any;
  productsWithCategory$ = combineLatest([
    this.products$,
    this.categories$
  ])
  .pipe(
  map(([products , categories ]) =>
    products.map((product:any) => ({
      ...product,
      category:categories.find((cat: { id: any; }) => product.catId === cat.id).name
    }))
  ))
}
