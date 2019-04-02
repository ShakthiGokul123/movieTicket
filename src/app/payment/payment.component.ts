import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {Router} from '@angular/router';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
    
  constructor(public alertController: AlertController,private router:Router) { }
  
  ngOnInit() {
    
  }
  
  onSuccess(){
    this.successAlert();
    this.router.navigate(['./dashboards'])
  }
  async successAlert() {
    const alert = await this.alertController.create({
      header: 'Success',
      message: 'Payment Success.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
