import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBean } from 'src/app/declarations/interfaces';
import { BeanService } from 'src/app/services/bean.service';
import {countries, hasFlag} from 'country-flag-icons';
import getUnicodeFlagIcon from 'country-flag-icons/unicode';
import { ModalController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-bean-details',
  templateUrl: './bean-details.page.html',
  styleUrls: ['./bean-details.page.scss'],
})
export class BeanDetailsPage implements OnInit {
  @Input('beanId') beanID: string;

  bean$: Observable<IBean>;
  flag: string;

  constructor(public platform: Platform,
              private beanService: BeanService,
              private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log('id', this.beanID)
    if (!this.bean$) this.bean$ = this.beanService.getBeanById(this.beanID);
  }

  getFlag(countryCode: string) {
    return (countries.includes(countryCode) && hasFlag(countryCode)) && getUnicodeFlagIcon(countryCode);
  }

  async dismiss() {
    const top = await this.modalCtrl.getTop();
    if (top) await top.dismiss();
  }

}
