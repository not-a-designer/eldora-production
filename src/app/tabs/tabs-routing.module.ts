import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'roasts',
        loadChildren: () => import('../pages/roasts/roasts.module').then( m => m.RoastsPageModule)
      },
      {
        path: 'chocolate',
        loadChildren: () => import('../pages/chocolate/chocolate.module').then(m => m.ChocolatePageModule)
      },
      { 
        path: '',
        redirectTo: 'roasts',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
