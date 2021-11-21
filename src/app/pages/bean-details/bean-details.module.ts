import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeanDetailsPageRoutingModule } from './bean-details-routing.module';

import { BeanDetailsPage } from './bean-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeanDetailsPageRoutingModule
  ],
  declarations: [BeanDetailsPage]
})
export class BeanDetailsPageModule {}
