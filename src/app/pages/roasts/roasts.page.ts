import { Component, OnInit } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { NewRoastComponent } from 'src/app/components/new-roast/new-roast.component';
import { BeanService } from 'src/app/services/bean.service';

@Component({
  selector: 'app-roasts',
  templateUrl: './roasts.page.html',
  styleUrls: ['./roasts.page.scss'],
})
export class RoastsPage implements OnInit {

  beanList = [];
  constructor(public platform: Platform, 
              private modalCtrl: ModalController, 
              private beanService: BeanService) { }

  ngOnInit() {
    this.beanService.getAllBeans().subscribe((beans) => {
      this.beanList = beans;
    })
  }

  async presentNewRoastModal() {
    const modal = await this.modalCtrl.create({
      component: NewRoastComponent,
      componentProps: {
        beans: this.beanList
      }
    });
    await modal.present();
  }

}
