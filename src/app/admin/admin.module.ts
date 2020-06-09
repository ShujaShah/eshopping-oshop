import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'shared/services/auth-guard.service';
import { SharedModule } from 'shared/shared.module';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { AdminAuthGuard } from './services/admin-auth-guard.service';
import { ViewOrderComponent } from './components/admin-orders/view-order/view-order.component';

@NgModule({
  declarations: [
    ProductFormComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    ViewOrderComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([

      {path: 'admin/orders', component:AdminOrdersComponent, canActivate:[AuthGuard, AdminAuthGuard]},
      {path: 'admin/orders/:id', component:ViewOrderComponent, canActivate:[AuthGuard, AdminAuthGuard]},
      {path: 'admin/products/new', component:ProductFormComponent, canActivate:[AuthGuard, AdminAuthGuard]},
      {path: 'admin/products/:id', component:ProductFormComponent, canActivate:[AuthGuard, AdminAuthGuard]},
      {path: 'admin/products', component:AdminProductsComponent, canActivate:[AuthGuard, AdminAuthGuard]},
      
    ])
  ]
})
export class AdminModule { }
