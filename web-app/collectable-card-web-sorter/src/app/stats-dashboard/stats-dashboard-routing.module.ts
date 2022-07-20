import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatsDashboardPage } from './stats-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: StatsDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatsDashboardPageRoutingModule {}
