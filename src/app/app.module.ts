import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { LayoutAdminComponent } from './layouts/layout-admin/layout-admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ManageProductComponent } from './pages/admin/manage-product/manage-product.component';

import { ProductsAddComponent } from './components/products-add/products-add.component';
import { ProductsItemComponent } from './components/products-item/products-item.component';
import { ProductsDetailComponent } from './components/products-detail/products-detail.component';
import { ProductsListComponent } from './components/products-list/products-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductsDetailComponent,
    ProductsItemComponent,
    HomePageComponent,
    LayoutAdminComponent,
    DashboardComponent,
    PageNotFoundComponent,
    ManageProductComponent,
    // ProductEditComponent,
    ProductsAddComponent,
    ProductsListComponent,
    ProductsAddComponent,
    ProductsItemComponent,
    ProductsDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
