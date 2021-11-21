import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeansPage } from './beans.page';

const routes: Routes = [
  {
    path: '',
    component: BeansPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeansPageRoutingModule {}
