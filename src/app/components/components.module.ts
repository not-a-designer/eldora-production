import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SingleOriginComponent } from './single-origin/single-origin.component';
import { WhiteChocolateComponent } from './white-chocolate/white-chocolate.component';
import { NewRoastComponent } from './new-roast/new-roast.component';
import { SettingsPopoverComponent } from './settings-popover/settings-popover.component';



@NgModule({
  declarations: [
    SingleOriginComponent,
    NewRoastComponent,
    SettingsPopoverComponent,
    WhiteChocolateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule
  ],
  exports: [
    SingleOriginComponent,
    NewRoastComponent,
    SettingsPopoverComponent,
    WhiteChocolateComponent
  ]
})
export class ComponentsModule { }
