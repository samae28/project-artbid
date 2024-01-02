import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab3Page } from './tab3.page';

const routes: Routes = [
  {
    path: '',
    component: Tab3Page,
  },  {
    path: 'fixed-item',
    loadChildren: () => import('./fixed-item/fixed-item.module').then( m => m.FixedItemPageModule)
  },
  {
    path: 'modal-viewartbymedium',
    loadChildren: () => import('./modal-viewartbymedium/modal-viewartbymedium.module').then( m => m.ModalViewartbymediumPageModule)
  },
  {
    path: 'modal-view-artist',
    loadChildren: () => import('./modal-view-artist/modal-view-artist.module').then( m => m.ModalViewArtistPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab3PageRoutingModule {}
