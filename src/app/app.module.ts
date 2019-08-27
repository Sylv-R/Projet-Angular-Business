import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitsComponent } from './Graphics/produits/produits.component';
import { ProduitDetailComponent } from './Graphics/produit-detail/produit-detail.component';
import { ListeProduitsComponent } from './Graphics/liste-produits/liste-produits.component';
import { Page404Component } from './Graphics/page404/page404.component';


@NgModule({
  declarations: [
    AppComponent,
    ProduitsComponent,
    ProduitDetailComponent,
    ListeProduitsComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
