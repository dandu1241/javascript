import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { GalleryComponent } from './gallery/gallery.component';
import { DefaultComponent } from './default/default.component';
import { CountriesComponent } from './countries/countries.component';
import { HttpClientModule } from '@angular/common/http';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { ProductsComponent } from './products/products.component';
import { ProductsDetailComponent } from './products-detail/products-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    GalleryComponent,
    DefaultComponent,
    CountriesComponent,
    CountryDetailsComponent,
    ProductsComponent,
    ProductsDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
