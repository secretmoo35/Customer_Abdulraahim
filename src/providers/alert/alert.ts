import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';

/*
  Generated class for the AlertProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AlertProvider {

  constructor(
    public http: HttpClient,
    public alertCtrl: AlertController
  ) {
  }

  // ### note ###
  // private translate: TranslateService,
  // let language = this.translate.currentLang;
  // if (language === 'th') {
  //   this.alert.onAlert('แจ้งเตือน', 'อีเมล์นี้มีผู้ใช้งานแล้ว', 'ตกลง');
  // } else if (language === 'en') {
  //   this.alert.onAlert('Wraning', 'Email is already exists.', 'OK');
  // }

  onAlert(title, massage, button) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: massage,
      mode: 'ios',
      buttons: [button]
    });
    alert.present();
  }

  onDailyWelcomeAlert(image, title, description, remark, button) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: description,
      mode: 'ios',
      buttons: [button]
    });
    alert.present();
  }

}
