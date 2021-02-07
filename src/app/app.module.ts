import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { Cat01Component } from './page/cat01/cat01.component';
import { Cat02Component } from './page/cat02/cat02.component';
import { HomeComponent } from './page/home/home.component';
import { ProductCardComponent } from './common/product-card/product-card.component';
import { ProductPagiComponent } from './common/product-pagi/product-pagi.component';
import { EmployeeCardComponent } from './common/employee-card/employee-card.component';
import { ProductListComponent } from './common/product-list/product-list.component';
import { AdminComponent } from './common/admin/admin.component';
import { NumberHuPipe } from './pipe/number-hu.pipe';
import { FilterPipe } from './pipe/filter.pipe';
import { SortPipe } from './pipe/sort.pipe';
import { CategoryPipe } from './pipe/category.pipe';
import { FeaturedPipe } from './pipe/featured.pipe';
import { SalesPipe } from './pipe/sales.pipe';




@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    Cat01Component,
    Cat02Component,
    HomeComponent,
    FilterPipe,
    ProductCardComponent,
    ProductPagiComponent,
    SortPipe,
    EmployeeCardComponent,
    FooterComponent,
    ProductListComponent,
    NumberHuPipe,
    AdminComponent,
    CategoryPipe,
    FeaturedPipe,
    SalesPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
