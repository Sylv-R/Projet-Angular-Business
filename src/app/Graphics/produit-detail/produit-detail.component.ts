import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Produit } from 'src/app/Model/produit';
import { ProduitRepositoryService } from 'src/app/Services/produit-repository.service';

@Component({
  selector: 'app-produit-detail',
  templateUrl: './produit-detail.component.html',
  styleUrls: ['./produit-detail.component.css']
})
export class ProduitDetailComponent implements OnInit {

  public isEditing = false;
  public isAffectingValues = false;
  public isAdding = false;
  public addNewId;
  private _produit: Produit;
  produits: Produit[];

  constructor(private _produitsRepo: ProduitRepositoryService) {
    this.produits = this._produitsRepo.getProduits();
  }

  ngOnInit() {
    this.produitForm.valueChanges.subscribe((d) => {
      if (!this.isAffectingValues) {
        this.isEditing = true;
        this.onEditionChanges.emit(this.isEditing);
      }
    });
  }

  @Input() set produit(value: Produit) {
    this._produit = value;
    this.selectProduit(this._produit);
  }

  get produit() {
    return this._produit;
  }

  public produitForm = new FormGroup({
    id: new FormControl(''),
    nom: new FormControl(''),
    texture: new FormControl(''),
    grammage: new FormControl(''),
    couleur: new FormControl('')
  });

  @Output() onEditionChanges = new EventEmitter<boolean>();

  selectProduit(p: Produit) {
    this.isAffectingValues = true;
    this.produitForm.setValue(p);
    this.isAffectingValues = false;
  }

  onSubmit() {
    this.produit.setValue(this.produitForm.value);
    this.isEditing = false;
    this.onEditionChanges.emit(this.isEditing);

  }

  onCancel() {
    this.produitForm.setValue(this.produit);
    this.isEditing = false;
    this.onEditionChanges.emit(this.isEditing);
  }

  addProduit() {
    var arrayIds: number[] = [];
    for (var i = 0; i < this.produits.length; i++) {
      var ids = this.produits[i].id;
      arrayIds.push(ids);
    }
    var maxId = Math.max.apply(Math, arrayIds);

    this.produitForm.patchValue({ id: maxId + 1 });
    this.produits.push(new Produit(this.produitForm.value));
    this.produitForm.setValue(this.produit);
    this.isEditing = false;
    this.onEditionChanges.emit(this.isEditing);
  }
}
