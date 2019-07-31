import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { OurClientsComponent } from './components/our-clients/our-clients.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainBannerComponent } from './components/main-banner/main-banner.component';
import { ProductsServicesComponent } from './components/products-services/products-services.component';
import { ValuesComponent } from './components/values/values.component';
import { SmallProductsComponent } from './components/small-products/small-products.component';
import { ClientsTestimonyComponent } from './components/clients-testimony/clients-testimony.component';
import { SplitStructComponent } from './components/split-struct/split-struct.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app.routing';
import { AboutComponent } from './components/about/about.component';
import { BreadcrumbsModule } from './components/breadcrumbs/breadcrumbs.module';
import { ContactComponent } from './components/contact/contact.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MainProductsComponent } from './components/main-products/main-products.component';
import { AirAccessoriesComponent } from './components/products/air-accessories/air-accessories.component';
import { ProductSwitcherComponent } from './components/products/product-switcher/product-switcher.component';
import { HttpClientModule, HttpUrlEncodingCodec } from "@angular/common/http";
import { MobileOffsetMenuComponent } from './components/mobile-offset-menu/mobile-offset-menu.component';

import { LazyLoadImageModule } from "ng-lazyload-image";
import { TitleCasePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OurClientsComponent,
    FooterComponent,
    MainBannerComponent,
    ProductsServicesComponent,
    ValuesComponent,
    SmallProductsComponent,
    ClientsTestimonyComponent,
    SplitStructComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    MainProductsComponent,
    AirAccessoriesComponent,
    ProductSwitcherComponent,
    MobileOffsetMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BreadcrumbsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LazyLoadImageModule
  ],
  providers: [HttpUrlEncodingCodec,TitleCasePipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
