import { Component, OnInit } from '@angular/core';
// import { products } from '../products';
import { ProductService } from '../shared/product.service';
// import { Observable } from 'rxjs';


@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss']
})
export class ProductListComponent implements OnInit {
  products :any;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // this.products = this.productService.getProducts();

    const productsObservable = this.productService.getProducts()
    productsObservable.subscribe(
      (data) => {
        // console.log('次のデータが出力されました' + data)
        this.products = data
      },
      (err) => { console.error('次のエラーが発生しました: ' + err) },
      () => { console.log('完了しました') }
    )

  }

}
