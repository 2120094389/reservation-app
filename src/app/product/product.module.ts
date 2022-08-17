import { NgModule } from '@angular/core';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-listings/product-listings.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  {
    path: 'products', component: ProductComponent,
    children:[
      { path: '', component: ProductListComponent},
      { path: ':productId', component: ProductDetailComponent}
    ]
  }
];


@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductListComponent,
    ProductComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class ProductModule {
    
 }