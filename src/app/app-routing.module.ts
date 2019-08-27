import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduitsComponent } from './Graphics/produits/produits.component';
import { ListeProduitsComponent } from './Graphics/liste-produits/liste-produits.component';
import { ProduitDetailComponent } from './Graphics/produit-detail/produit-detail.component';
import { Page404Component } from './Graphics/page404/page404.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  //{ path: '', component: AppComponent},
  { path: 'produits', component: ProduitsComponent, data: { produitAndDetail: true, isCreateNewProduit: true } },
  { path: 'listProduits', component: ListeProduitsComponent, data: { produitAndDetail: false, isCreateNewProduit: false } },
  { path: 'produit/:id', component: ProduitDetailComponent, data: { produitAndDetail: true, isCreateNewProduit: true, onlyAddButtonUrl0: true } },
  { path: '404', component: Page404Component },
  //{ path: '**', redirectTo : '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
