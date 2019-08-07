import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitsComponent } from './Graphics/produits/produits.component';
import { ProduitDetailComponent } from './Graphics/produit-detail/produit-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduitsComponent,
    ProduitDetailComponent
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
