import { Component, OnInit } from '@angular/core';
import { AlertController, Platform } from '@ionic/angular';
import { IngredientsService } from '../../services/ingredients.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.page.html',
  styleUrls: ['./ingredients.page.scss'],
})
export class IngredientsPage implements OnInit {

  ingredientsList = []

  constructor(public platform: Platform, 
              private ingredientService: IngredientsService, 
              private alertCtrl: AlertController) { }

  ngOnInit() {
    this.ingredientService.getAllIngredients().subscribe((result) => {
      console.log(result);
      this.ingredientsList = result;
    });
  }

  async presentAddAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Add Ingredient',
      message: 'Enter product, then product variety (if any), then brand',
      
      inputs: [{
        label: 'Product',
        tabindex: 1,
        name: 'product',
        type: 'text',
        placeholder: `Ex: 'sugar'`
      }, {
        label: 'Variety',
        tabindex: 2,
        name: 'variety',
        type: 'text',
        placeholder: `Ex: 'coconut palm'`
      }, {
        label: 'Brand',
        tabindex: 0,
        name: 'brand',
        type: 'text',
        placeholder: `Ex: 'Wholesome'`
      }],
      buttons: [{
        text: 'Cancel',
        role: 'cancel'
      }, {
        text: 'Add',
        handler: ({ product, variety, brand }) => {
          if (product && brand) {
            const ingredient = (variety) ? { product, brand, variety } : { product, brand }
            console.log('handler', ingredient);
            this.addIngredient(ingredient)
          }
        }
      }]
    });
    await alert.present();
  }

  async presentDeleteAlert(ingredient) {
    const alert = await this.alertCtrl.create({
      header: 'Delete Ingredient',
      message: 'Are you sure? (This action cannot be undone)',
      inputs: [{
        name: 'password',
        type: 'password',
        label: 'Password',
        placeholder: 'Password'
      }],
      buttons: [{
        text: 'Cancel',
        role: 'cancel'
      }, {
        text: 'Delete',
        role: 'destructive',
        handler: ({ password }) => {
          console.log(password);
          if(!!password) this.deleteIngredient(ingredient)
        }
      }]
    });
    await alert.present();
  }

  async presentUpdateAlert(ingredient) {
    const alert = await this.alertCtrl.create({
      header: 'Update Ingredient',
      message: 'Change product name, product variety (if any), or brand',
      cssClass: 'edit-ingredient-alert',
      inputs: [{
        label: 'Product',
        tabindex: 1,
        name: 'product',
        type: 'text',
        value: ingredient.product,
        placeholder: `Ex: 'sugar'`
      }, {
        label: 'Variety',
        tabindex: 2,
        name: 'variety',
        type: 'text',
        value: ingredient?.variety,
        placeholder: `Ex: 'coconut palm'`
      }, {
        label: 'Brand',
        tabindex: 0,
        name: 'brand',
        type: 'text',
        value: ingredient.brand,
        placeholder: `Ex: 'Wholesome'`
      }],
      buttons: [{
        text: 'Cancel',
        role: 'cancel'
      }, {
        text: 'Update',
        handler: ({ product, variety, brand }) => {
          if (product && brand) {
            const ingredient = (variety) ? { product, brand, variety } : { product, brand }
            console.log('handler', ingredient);
            this.updateIngredient(ingredient)
          }
        }
      }]
    });
    await alert.present();
  }

  addIngredient(ingredient) {
    this.ingredientService.addIngredient(ingredient);
  }

  updateIngredient(ingredient) {
    this.ingredientService.updateIngredient(ingredient);
  }

  deleteIngredient(ingredient) {
    this.ingredientService.deleteIngredient(ingredient)
  }

}
