import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Produit } from 'src/app/Model/produit';

@Component({
  selector: 'app-produit-detail',
  templateUrl: './produit-detail.component.html',
  styleUrls: ['./produit-detail.component.css']
})
export class ProduitDetailComponent implements OnInit {

  public isEditing = false;
  public isAffectingValues = false;
  private _produit: Produit;

  constructor() { }

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
    this.selectPlayer(this._produit);
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

    

   selectPlayer(p: Produit) {
    //passage des valeurs du joueur sélectionné au formulaire
    this.isAffectingValues = true;
    this.produitForm.setValue(p);
    this.isAffectingValues = false;

  }

  onSubmit() {
    //Mise à jour des données du joueur sélectionné
    console.log("Hééé2");
    this.produit.setValue(this.produitForm.value);
    this.isEditing = false;
    this.onEditionChanges.emit(this.isEditing);
    
  }

  onCancel() {
    console.log("Hééé");
    this.produitForm.setValue(this.produit);    
    this.isEditing = false;
    this.onEditionChanges.emit(this.isEditing);
  }

}
