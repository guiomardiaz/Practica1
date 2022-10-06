import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'fct',
        loadChildren: () => import('./../fct/fct.module').then( m => m.FctPageModule)
      },
      {
        path: 'dam2',
        loadChildren: () => import('./../dam2/dam2.module').then( m => m.Dam2PageModule)
      },
    
      {
        path: 'dam1',
        loadChildren: () => import('./../dam1/dam1.module').then( m => m.Dam1PageModule)
      },

    ]
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
