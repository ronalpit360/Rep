import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailstudioPage } from './detailstudio.page';

const routes: Routes = [
  {
    path: '',
    component: DetailstudioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailstudioPageRoutingModule {}
