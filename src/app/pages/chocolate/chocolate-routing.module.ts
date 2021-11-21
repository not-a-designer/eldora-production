import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChocolatePage } from './chocolate.page';

const routes: Routes = [
  {
    path: '',
    component: ChocolatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChocolatePageRoutingModule {}
