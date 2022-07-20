import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatsDashboardPageRoutingModule } from './stats-dashboard-routing.module';

import { StatsDashboardPage } from './stats-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatsDashboardPageRoutingModule
  ],
  declarations: [StatsDashboardPage]
})
export class StatsDashboardPageModule {}
