import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HospitalListPage } from './hospital-list.page';
import { ComponentsModule } from '../components/components.module'

const routes: Routes = [
  {
    path: '',
    component: HospitalListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [HospitalListPage]
})
export class HospitalListPageModule {}
