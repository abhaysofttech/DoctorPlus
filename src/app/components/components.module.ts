import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HospitalSliderComponent } from './hospital-slider/hospital-slider.component';
import { IonicModule } from '@ionic/angular';
import { HospitalTimeComponent } from './hospital-time/hospital-time.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [HospitalSliderComponent, HospitalTimeComponent, HeaderComponent],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [HospitalSliderComponent, HospitalTimeComponent, HeaderComponent]
})
export class ComponentsModule { }
