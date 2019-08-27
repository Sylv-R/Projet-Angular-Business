import { Injectable } from '@angular/core';
import { Produit } from '../Model/produit';
import { FormGroup, FormControl } from '@angular/forms';
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ProduitRepositoryService {

  selectedProduit: Produit;

  constructor() { }

  private produits = [
    new Produit({
      id: 1,
      nom: "Produit 1",
      texture: "Texture 1",
      grammage: "60 g/m²",
      couleur: "bleu",
    }),
    new Produit({
      id: 2,
      nom: "Produit 2",
      texture: "Texture 2",
      grammage: "100 g/m²",
      couleur: "blanc",
    }),
    new Produit({
      id: 3,
      nom: "Produit 3",
      texture: "Texture 3",
      grammage: "160 g/m²",
      couleur: "ocre",
    })
  ];

  public getProduits() {
    return this.produits;
  }

  public getProduitById(id: number) {
    return this.getProduits().find(produit => produit.id === id);
  }

  public getNextId() {
    return Math.max.apply(Math, [0, ...this.produits.map(p => p.id)]) + 1;
  }

  public newProduit(p: Produit) {
    var newProduit = new Produit();
    newProduit.setValue(p);
    newProduit.setId(this.getNextId());
    this.produits.push(newProduit);
    return newProduit;
  }
}
