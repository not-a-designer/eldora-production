import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChocolatePageRoutingModule } from './chocolate-routing.module';

import { ChocolatePage } from './chocolate.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChocolatePageRoutingModule,
    ComponentsModule
  ],
  declarations: [ChocolatePage]
})
export class ChocolatePageModule {}
