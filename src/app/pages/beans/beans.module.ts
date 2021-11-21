import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeansPageRoutingModule } from './beans-routing.module';

import { BeansPage } from './beans.page';
import { BeanDetailsPageModule } from '../bean-details/bean-details.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeansPageRoutingModule,
    BeanDetailsPageModule
  ],
  declarations: [BeansPage]
})
export class BeansPageModule {}
