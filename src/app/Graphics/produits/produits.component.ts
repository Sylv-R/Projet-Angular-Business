import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/Model/produit';
import { ProduitRepositoryService } from 'src/app/Services/produit-repository.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
 

  constructor(private _produitsRepo: ProduitRepositoryService) { 
    this.produits=this._produitsRepo.getProduits();
  }

  

  ngOnInit() {
  }

  private produits = [
    new Produit({
      id: 1,
      nom: "Produit_1",
      texture: "Texture_1",
      grammage: 60,
      couleur: "bleu",
    }),

    new Produit({
      id: 2,
      nom: "Produit_2",
      texture: "Texture_2",
      grammage: 100,
      couleur: "blanc",
    })
  ];

}
