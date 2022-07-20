import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'stats-dashboard',
    loadChildren: () =>
      import('./stats-dashboard/stats-dashboard.module').then(
        (m) => m.StatsDashboardPageModule
      ),
  },
  {
    path: 'add-card',
    loadChildren: () =>
      import('./add-card/add-card.module').then((m) => m.AddCardPageModule),
  },
  {
    path: 'manage-users',
    loadChildren: () =>
      import('./manage-users/manage-users.module').then(
        (m) => m.ManageUsersPageModule
      ),
  },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
