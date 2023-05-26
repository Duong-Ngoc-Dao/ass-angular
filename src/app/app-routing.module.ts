
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

import { LayoutAdminComponent } from './layouts/layout-admin/layout-admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ManageProductComponent } from './pages/admin/manage-product/manage-product.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsDetailComponent } from './components/products-detail/products-detail.component';
import { ProductsAddComponent } from './components/products-add/products-add.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'product', component: ProductsListComponent },
  { path: 'product/:id', component: ProductsDetailComponent },
  {
    path: 'admin', component: LayoutAdminComponent, children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'product', component: ManageProductComponent },
      { path: "product/add", component: ProductsAddComponent },
    ],
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
