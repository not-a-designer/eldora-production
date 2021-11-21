import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoastsPageRoutingModule } from './roasts-routing.module';

import { RoastsPage } from './roasts.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoastsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RoastsPage]
})
export class RoastsPageModule {}
