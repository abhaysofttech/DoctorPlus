import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hospital-slider',
  templateUrl: './hospital-slider.component.html',
  styleUrls: ['./hospital-slider.component.scss']
})
export class HospitalSliderComponent implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  };
  constructor() { }

  ngOnInit() {
  }

}
