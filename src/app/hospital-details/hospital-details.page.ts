import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { BookAppointmentPageModule } from '../book-appointment/book-appointment.module'
import { Router } from '@angular/router';
@Component({
  selector: 'app-hospital-details',
  templateUrl: './hospital-details.page.html',
  styleUrls: ['./hospital-details.page.scss'],
})
export class HospitalDetailsPage implements OnInit {
  pageTitle: string = "Welcome to Advik Clinc"
  value = 0;
  constructor( private router: Router) { }

  ngOnInit() {
  }

  // async bookAppointment() {
  //   const bookingModal = await this.modalController.create({
  //     component: BookAppointmentPageModule,
  //     componentProps:{
  //       booking_id: this.value
  //     }
  //   });

  // await bookingModal.present();

  //}

  // bookAppointment(routeValue){
  //   //this.router.navigate([routeValue]); 
 
  // }

}
