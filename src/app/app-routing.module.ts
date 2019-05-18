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
      path: 'reactive-form',
      loadChildren: './reactive-form/reactive-form.module#ReactiveFormPageModule'
   },
  { path: 'template-driven-form', loadChildren: './template-driven-form/template-driven-form.module#TemplateDrivenFormPageModule' },
  { path: 'reactive-form', loadChildren: './reactive-form/reactive-form.module#ReactiveFormPageModule' },
  { path: 'datepicker-component', loadChildren: './datepicker-component/datepicker-component.module#DatepickerComponentPageModule' },
  { path: 'datepicker-directive', loadChildren: './datepicker-directive/datepicker-directive.module#DatepickerDirectivePageModule' },
  { path: 'datepicker-button', loadChildren: './datepicker-button/datepicker-button.module#DatepickerButtonPageModule' },
  { path: 'search', loadChildren: './search/search.module#SearchPageModule' },
  { path: 'doctor-list', loadChildren: './doctor-list/doctor-list.module#DoctorListPageModule' },
  { path: 'doctor-details', loadChildren: './doctor-details/doctor-details.module#DoctorDetailsPageModule' },
  { path: 'hospital-list', loadChildren: './hospital-list/hospital-list.module#HospitalListPageModule' },
  { path: 'hospital-details', loadChildren: './hospital-details/hospital-details.module#HospitalDetailsPageModule' },
  { path: 'book-appointment', loadChildren: './book-appointment/book-appointment.module#BookAppointmentPageModule' },
  { path: 'datepicker-button', loadChildren: './datepicker-button/datepicker-button.module#DatepickerButtonPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
