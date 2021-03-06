export class Produit {

    public id: number;
    public nom: string;
    public texture: string;
    public grammage: string;
    public couleur: string;

    constructor(data?) {
        this.setValue(data);
    }

    setValue(data?) {
        if (data == null) return;
        if (data.hasOwnProperty('id')) this.id = data.id;
        if (data.hasOwnProperty('nom')) this.nom = data.nom;
        if (data.hasOwnProperty('texture')) this.texture = data.texture;
        if (data.hasOwnProperty('grammage')) this.grammage = data.grammage;
        if (data.hasOwnProperty('couleur')) this.couleur = data.couleur;
    }

    public setId(id: number) {
        this.id = id;
    }
}

