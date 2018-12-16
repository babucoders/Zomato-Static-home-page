import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentComponent } from './component/component.component';
import { HeaderComponent } from './component/shared/header/header.component';
import { FooterComponent } from './component/shared/footer/footer.component';
import { OrderingComponent } from './component/ordering/ordering.component';
import { FilterComponent } from './component/ordering/filter/filter.component';
import { NavbarComponent } from './component/shared/navbar/navbar.component';
import { ProductListComponent } from './component/ordering/product-list/product-list.component';
import { ProductItem1Component } from './component/ordering/Product-list/product-item1/product-item1.component';
import { ProductItem2Component } from './component/ordering/Product-list/product-item2/product-item2.component';
import { SearchComponent } from './component/ordering/search/search.component';
import { ProductItem3Component } from './component/ordering/Product-list/product-item3/product-item3.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    HeaderComponent,
    FooterComponent,
    OrderingComponent,
    FilterComponent,
    NavbarComponent,
    ProductListComponent,
    ProductItem1Component,
    ProductItem2Component,
    SearchComponent,
    ProductItem3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
