import { Component, OnInit } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { Observable } from 'rxjs';
import { IBean } from 'src/app/declarations/interfaces';
import { BeanService } from 'src/app/services/bean.service';
import { BeanDetailsPage } from '../bean-details/bean-details.page';

@Component({
  selector: 'app-beans',
  templateUrl: './beans.page.html',
  styleUrls: ['./beans.page.scss'],
})
export class BeansPage implements OnInit {

  beans = [];
  beans$: Observable<IBean[]>

  constructor(public platform: Platform,
              private beanService: BeanService, 
              private modalCtrl: ModalController) { }

  ngOnInit() {
    /* this.beanService.getAllBeans().subscribe((beans) => {
      this.beans = beans;
    }) */
    this.beans$ = this.beanService.getAllBeans();
  }

  public async presentDetailsModal(beanID: string) {
    const modal = await this.modalCtrl.create({
      component: BeanDetailsPage,
      componentProps: {
        beanID
      },
      showBackdrop: true,
      backdropDismiss: true,
      handle: true
    });
    await modal.present();
  }

}
