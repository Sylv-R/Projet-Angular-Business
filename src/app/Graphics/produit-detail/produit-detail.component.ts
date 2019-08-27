import { Component, OnInit, Input, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Produit } from 'src/app/Model/produit';
import { ProduitRepositoryService } from 'src/app/Services/produit-repository.service';
import { ActivatedRoute } from '@angular/router';
import { ListeProduitsComponent } from '../liste-produits/liste-produits.component';
import { ProduitsComponent } from '../produits/produits.component';

@Component({
  selector: 'app-produit-detail',
  templateUrl: './produit-detail.component.html',
  styleUrls: ['./produit-detail.component.css']
})
export class ProduitDetailComponent implements OnInit {

  public ishidingBtnAddProduitInList;
  public addNewProduit;
  public addNewProduit2;
  public onlyAddButtonUrl0;
  public onlyAddButton;
  public isCreateNewProduit;
  public produitAndDetail;
  public showDetailProduit;
  public isEditing = false;
  public isAffectingValues = false;
  public isAdding = false;
  private _produit: Produit;
  produits: Produit[];
  produitId: number;
  selectedProduit: Produit;


  constructor(private _actRoute: ActivatedRoute, private _produitsRepo: ProduitRepositoryService) {
    this.produits = this._produitsRepo.getProduits();
  }



  ngOnInit() {
    this.produitForm.valueChanges.subscribe((d) => {
      if (!this.isAffectingValues) {
        this.isEditing = true;
        this.onEditionChanges.emit(this.isEditing);
      }
    });
    this.produitId = + this._actRoute.snapshot.paramMap.get('id');
    if (this.produitId !== 0) {
      this._produit = this._produitsRepo.getProduitById(this.produitId);
      this.produitForm.setValue(this._produit);
    }
    this.produitAndDetail = this._actRoute.snapshot.data['produitAndDetail'];
    this.onlyAddButton = false;
    this.onlyAddButtonUrl0 = this._actRoute.snapshot.data['onlyAddButtonUrl0'];

    if (!this.produitAndDetail) {
      this.showDetailProduit = false;
    } else {
      this.showDetailProduit = true;
      this.isCreateNewProduit = this._actRoute.snapshot.data['isCreateNewProduit'];
    }

    if (this.isCreateNewProduit) {
      // this.produitForm.reset();
      //this.isCreateNewProduit = false;
      // this.onDisplayEmptyForm.emit(this.isCreateNewProduit);
    }
    this.addNewProduit = false;
  }

  ngOnDestroy() {
    this.isCreateNewProduit = false;
    this.onDisplayEmptyForm.emit(this.isCreateNewProduit);
  }

  @Input() set createNewProduit(value: boolean) {
    this.isCreateNewProduit = value;
    this.produitAndDetail = true;
    this.produitForm.reset();
    this.produitForm.patchValue({ id: this._produitsRepo.getNextId() });
  }

  @Input() set produit(value: Produit) {
    this._produit = value;
    this.selectProduit(this._produit);
  }

  @Output() onEditionChanges = new EventEmitter<boolean>();
  @Output() updateSelected = new EventEmitter<Produit>();
  @Output() hideBtnAddProduitInList = new EventEmitter<boolean>();
  @Output() onDisplayEmptyForm = new EventEmitter<boolean>();
  
  get produit() {
    return this._produit;
  }

  get createNewProduit() {
    return this.isCreateNewProduit;
  }

  public produitForm = new FormGroup({
    id: new FormControl(''),
    nom: new FormControl(''),
    texture: new FormControl(''),
    grammage: new FormControl(''),
    couleur: new FormControl('')
  });

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
    if (!this.showDetailProduit && this.isCreateNewProduit && this.produitAndDetail) {

      this.isCreateNewProduit = false;
      this.onDisplayEmptyForm.emit(this.isCreateNewProduit);
      this.produitForm.reset();
      this.onlyAddButton = false;
      this.ishidingBtnAddProduitInList = false;
      this.hideBtnAddProduitInList.emit(this.ishidingBtnAddProduitInList);

    } else {
      this.produitForm.setValue(this.produit);
      this.isEditing = false;
      this.onEditionChanges.emit(this.isEditing);
    }
    this.addNewProduit = false;
    this.addNewProduit2 = false;
   // document.getElementById("btnAddProduit").innerText = "Ajouter un nouveau produit";
  }

  addProduitUrl0() {
    this.produitForm.reset();
    this.produitForm.patchValue({ id: this._produitsRepo.getNextId() });
    this.showDetailProduit = false;
    this.onlyAddButton = true;
  }

  addProduit() {
    if (this.showDetailProduit && this.isCreateNewProduit && this.produitAndDetail) {
      if (!this.addNewProduit) {
        this.produitForm.reset();
        this.produitForm.patchValue({ id: this._produitsRepo.getNextId() });
        document.getElementById("btnAddProduit").innerText = "Valider le nouveau produit";
        this.addNewProduit2 = true;
      } else if (this.addNewProduit && this.addNewProduit2) {
        document.getElementById("btnAddProduit").innerText = "Ajouter un nouveau produit";
        this.selectedProduit = this._produitsRepo.newProduit(this.produitForm.value);
        this.updateSelected.emit(this.selectedProduit);
        this.isEditing = false;
        this.onEditionChanges.emit(this.isEditing);
        if (!this.showDetailProduit && this.isCreateNewProduit && this.produitAndDetail) {
          this.isCreateNewProduit = false;
          this.onDisplayEmptyForm.emit(this.isCreateNewProduit);
          this.produitForm.reset();
          this.onlyAddButton = false;
        }
        this.addNewProduit = false;
        this.addNewProduit2 = false;
      }
      if (!this.addNewProduit && this.addNewProduit2) {
        this.addNewProduit = true;
      }
    } else {
      this._produitsRepo.newProduit(this.produitForm.value);
      this.isEditing = false;
      this.onEditionChanges.emit(this.isEditing);
      if (!this.showDetailProduit && this.isCreateNewProduit && this.produitAndDetail) {
        this.isCreateNewProduit = false;
        this.onDisplayEmptyForm.emit(this.isCreateNewProduit);
        this.produitForm.reset();
        this.onlyAddButton = false;
      }
      this.ishidingBtnAddProduitInList = false;
      this.hideBtnAddProduitInList.emit(this.ishidingBtnAddProduitInList);
    }
  }
}
