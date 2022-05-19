import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'create',
    loadChildren: () => import('./pages/create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./pages/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'update/:id',
    loadChildren: () => import('./pages/update/update.module').then( m => m.UpdatePageModule)
  },
  {
    path: 'cantantes',
    loadChildren: () => import('./pages/cantantes/cantantes.module').then( m => m.CantantesPageModule)
  },
  {
    path: 'studios',
    loadChildren: () => import('./pages/studios/studios.module').then( m => m.StudiosPageModule)
  },
  {
    path: 'create-studio',
    loadChildren: () => import('./pages/create-studio/create-studio.module').then( m => m.CreateStudioPageModule)
  },
  {
    path: 'detailstudio/:id',
    loadChildren: () => import('./pages/detailstudio/detailstudio.module').then( m => m.DetailstudioPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
