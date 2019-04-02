import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
 
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss'],
})
export class ForgotpasswordComponent implements OnInit {
  mail=""
  constructor(public alertController: AlertController,private modalController:ModalController) { }

  ngOnInit() {}
  onSendMail(){
    if(this.mail==""){
      this.emptyAlert();
    }
    else{
      this.presentAlert();
    }
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      message: 'Mail send!!',
      buttons: ['OK']
    });

    await alert.present();
  }
  async emptyAlert() {
    const alert = await this.alertController.create({
      message: 'mail field is cannot be empty',
      buttons: ['OK']
    });

    await alert.present();
  }
}
