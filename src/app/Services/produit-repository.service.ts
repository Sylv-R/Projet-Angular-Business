import { Injectable } from '@angular/core';
import { Produit } from '../Model/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitRepositoryService {

  constructor() { }

  private produits = [
    new Produit({
      id: 1,
      nom: "Produit_1111",
      texture: "Texture_1",
      grammage: 60+" g/m²",
      couleur: "bleu",
    }),

    new Produit({
      id: 2,
      nom: "Produit_2",
      texture: "Texture_2",
      grammage: 100+" g/m²",
      couleur: "blanc",
    })
  ];

  public getProduits() {
    return this.produits;
  }

}
