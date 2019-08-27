import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/Model/produit';
import { ProduitRepositoryService } from 'src/app/Services/produit-repository.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  selectedProduit: Produit;
  isEditing = false;
  produits: Produit[];

  constructor(private _produitsRepo: ProduitRepositoryService, private _actRoute: ActivatedRoute) {
    this.produits = this._produitsRepo.getProduits();
  }

  ngOnInit() {
    this.produits = this._produitsRepo.getProduits();
    this.selectProduit(this.produits[0]);
  }

  selectProduit(p: Produit) {
    if (this.isEditing) return;
    this.selectedProduit = p;
  }

  isSelected(p: Produit) {
    return p === this.selectedProduit;
  }

  editionChanges(data) {
    this.isEditing = data;
  }

  updateSelected(data) {
    this.selectedProduit = data;
  }
}
