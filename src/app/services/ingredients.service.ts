import { Injectable } from '@angular/core';
import { collectionData, docData, Firestore } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, doc, updateDoc } from '@firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {

  constructor(private firestore: Firestore) { }

  getAllIngredients() {
    const ingredientsRef = collection(this.firestore, 'ingredients');
    return collectionData(ingredientsRef, { idField: 'id' });
  }

  getIngredientById(id: string) {
    const ingredientDocRef = doc(this.firestore, `ingredients/${id}`);
    return docData(ingredientDocRef, { idField: 'id' });
  }

  addIngredient(ingredient) {
    const ingredientsRef = collection(this.firestore, 'ingredients');
    return addDoc(ingredientsRef, ingredient);
  }

  updateIngredient(ingredient) {
    const ingredientDocRef = doc(this.firestore, `ingredients/${ingredient.id}`);
    return updateDoc(ingredientDocRef, ingredient)
  }

  deleteIngredient(ingredient) {
    const ingredientDocRef = doc(this.firestore, `ingredients/${ingredient.id}`);
    return deleteDoc(ingredientDocRef)
  }
}
