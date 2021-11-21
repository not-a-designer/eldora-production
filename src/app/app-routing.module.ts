import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'ingredients',
    loadChildren: () => import('./pages/ingredients/ingredients.module').then( m => m.IngredientsPageModule)
  },
  {
    path: 'beans',
    loadChildren: () => import('./pages/beans/beans.module').then( m => m.BeansPageModule)
  },
  /* {
    path: 'beans/:id',
    loadChildren: () => import('./pages/bean-details/bean-details.module').then( m => m.BeanDetailsPageModule)
  }, */

  {
    path: '**',
    redirectTo: 'roasts',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
