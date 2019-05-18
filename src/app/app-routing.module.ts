import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
  { path: 'search', loadChildren: './search/search.module#SearchPageModule' },
  { path: 'doctor-list', loadChildren: './doctor-list/doctor-list.module#DoctorListPageModule' },
  { path: 'doctor-details', loadChildren: './doctor-details/doctor-details.module#DoctorDetailsPageModule' },
  { path: 'hospital-list', loadChildren: './hospital-list/hospital-list.module#HospitalListPageModule' },
  { path: 'hospital-details', loadChildren: './hospital-details/hospital-details.module#HospitalDetailsPageModule' },
  { path: 'book-appointment', loadChildren: './book-appointment/book-appointment.module#BookAppointmentPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
