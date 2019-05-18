import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HospitalSliderComponent } from './hospital-slider/hospital-slider.component';
import { IonicModule } from '@ionic/angular';
import { HospitalTimeComponent } from './hospital-time/hospital-time.component';

@NgModule({
  declarations: [HospitalSliderComponent, HospitalTimeComponent],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports:[HospitalSliderComponent]
})
export class ComponentsModule { }
