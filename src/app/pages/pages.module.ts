import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './layout/layout.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CategoryComponent } from './category/category.component';
import { AboutComponent } from './about/about.component';
import { ShopByStoreComponent } from './shop-by-store/shop-by-store.component';
@NgModule({
  declarations: [
    HomeComponent,
    LayoutComponent,
    ProductDetailComponent,
    CategoryComponent,
    AboutComponent,
    ShopByStoreComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    HomeComponent
  ]
})
export class PagesModule { }
