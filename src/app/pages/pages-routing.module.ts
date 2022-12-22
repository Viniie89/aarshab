import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ShopByStoreComponent } from './shop-by-store/shop-by-store.component';

const routes: Routes = [
  
    {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'product-detail',
        component: ProductDetailComponent,
      },
      {
        path: 'category',
        component: CategoryComponent,
      },
      {
        path: 'shop-by-store',
        component: ShopByStoreComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
 
  
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
