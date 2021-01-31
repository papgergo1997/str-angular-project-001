import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { Cat01Component } from './page/cat01/cat01.component';
import { Cat02Component } from './page/cat02/cat02.component';
import { HomeComponent } from './page/home/home.component';
import { FilterPipe } from './pipe/filter.pipe';
import { ProductCardComponent } from './common/product-card/product-card.component';
import { ProductPagiComponent } from './common/product-pagi/product-pagi.component';
import { SortPipe } from './pipe/sort.pipe';
import { FooterComponent } from './footer/footer.component';
import { ProductListComponent } from './common/product-list/product-list.component';



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
    FooterComponent,
    ProductListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
