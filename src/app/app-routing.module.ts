import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CountriesComponent } from './countries/countries.component';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { DefaultComponent } from './default/default.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import {ProductsDetailComponent} from './products-detail/products-detail.component';

const routes: Routes = [
  {
    path:'home', component:HomeComponent
  },
  {
    path:'aboutus', component:AboutusComponent
  },
  {
    path:'countries',
    component:CountriesComponent
  },
  {
    path:'countryDetails/:acode',
    component:CountryDetailsComponent
  },
  {
    path:'gallery', component:GalleryComponent
  },
  {
    path:'products',
    component:ProductsComponent,
    children:[
      {
        path:'prodictdetails/:ptitle',
        component:ProductsDetailComponent
      }
    ]
  },
  {
    path:'contactus', component:ContactusComponent
  },
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"**",
    component:DefaultComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
