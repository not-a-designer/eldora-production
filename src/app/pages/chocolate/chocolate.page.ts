import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { SingleOriginComponent } from 'src/app/components/single-origin/single-origin.component';
import { ConcherService } from '../../services/concher.service';

@Component({
  selector: 'app-chocolate',
  templateUrl: './chocolate.page.html',
  styleUrls: ['./chocolate.page.scss'],
})
export class ChocolatePage implements OnInit {

  currentView: string = 'batches';
  chocolateBatches = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  conchers= [];

  constructor(private modalCtrl: ModalController, 
              private actionsheetCtrl: ActionSheetController, 
              private concherService: ConcherService) { }

  ngOnInit() {
    this.concherService.getAllConchers().subscribe((conchers) => {
      console.log(conchers);
      this.conchers = conchers.filter((concher) => concher.enabled);
    })
  }

  async presentChocolateTypeActionsheet(position: number) {
    const actionsheet = await this.actionsheetCtrl.create({
      header: 'Select batch type',
      cssClass: 'select-type-actionsheet',
      buttons: [{
        text: 'Single Origin',
        role: 's'
      }, {
        text: 'White Chocolate',
        role: 'w',
      }, {
        text: 'Cancel',
        role: 'cancel'
      }]
    });
    await actionsheet.present();
    const { role } = await actionsheet.onDidDismiss();
    if (role && role !== 'cancel' && role !== 'backdrop') {
      if (role === 's') { this.presentNewSingleOriginModal(position) }
      if (role === 'w') { this.presentNewWhiteChocolateModal(position) }
    }
  }

  /* async presentNewChocolateModal() {
    const modal = await this.
  } */

  async presentNewSingleOriginModal(position: number) {
    const modal = await this.modalCtrl.create({
      component: SingleOriginComponent,
      componentProps: {
        position
      },
      breakpoints: [0, .33, .66, 1],
      initialBreakpoint: .66,
      backdropBreakpoint: .33,
      backdropDismiss: false
    });
    await modal.present();
  }

  async presentNewWhiteChocolateModal(position: number) {}

  presentChocolateDetails() {}
}
