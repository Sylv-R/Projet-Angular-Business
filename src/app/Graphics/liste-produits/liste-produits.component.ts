import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/Model/produit';
import { ActivatedRoute } from '@angular/router';
import { ProduitRepositoryService } from 'src/app/Services/produit-repository.service';

@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.css'],

})
export class ListeProduitsComponent implements OnInit {

  public ishidingBtnAddProduitInList;
  produits: Produit[];
  public produit: Produit;
  selectedProduit: Produit;
  isEditing = false;
  isCreateNewProduit = false;

  constructor(private _actRoute: ActivatedRoute, private _produitRepo: ProduitRepositoryService) { }

  ngOnInit() {
    this.ishidingBtnAddProduitInList = false;
    this.produits = this._produitRepo.getProduits();
  }

  addProduit(addProduit: boolean) {
    this.ishidingBtnAddProduitInList = true;
    this.isCreateNewProduit = true;
    return addProduit = this.isCreateNewProduit;
  }

  displayEmptyForm(data) {
    this.isCreateNewProduit = data;
  }

  AddChanges(data) {
    this.ishidingBtnAddProduitInList = data;
  }
}
