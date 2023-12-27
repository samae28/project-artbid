import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'my-profile',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'bids-and-auction',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },  
      {
        path: 'history',
        loadChildren: () => import('../tab4/tab4.module').then(m => m.Tab4PageModule)
      },  
      {
        path: '',
        redirectTo: '/dashboard/home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
