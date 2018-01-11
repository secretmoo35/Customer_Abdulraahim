import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Tabs, Platform, ToastController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

/**
 * Generated class for the NavtabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-navtabs',
  templateUrl: 'navtabs.html'
})
export class NavtabsPage {
  @ViewChild('tabs') tabs: Tabs

  homeRoot = 'HomePage';
  recommentedRoot = 'RecommentedPage';
  rewardRoot = 'RewardPage';
  statusRoot = 'StatusPage';
  moreRoot = 'MorePage';

  icon: string = './assets/icon/reward.svg';
  color: string = '#EB3841';
  constructor(
    public navCtrl: NavController,
    private platform: Platform,
    private toastCtrl: ToastController,
    private translate: TranslateService,
  ) {
    platform.ready().then(() => {
      //back button handle
      //Registration of push in Android and Windows Phone
      var lastTimeBackPress = 0;
      var timePeriodToExit = 2000;

      platform.registerBackButtonAction(() => {
        //Double check to exit app
        if (new Date().getTime() - lastTimeBackPress < timePeriodToExit) {
          this.platform.exitApp(); //Exit from app
        } else {
          let language = this.translate.currentLang;
          let message = '';
          if (language === 'th') {
            message = 'กดปุ่มย้อนกลับอีกครั้ง เพื่อออกจากแอปพลิเคชัน';
          } else if (language === 'en') {
            message = 'Press back again to exit App?'
          }
          let toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
          });
          toast.present();
          lastTimeBackPress = new Date().getTime();
        }
      });
    });
  }

  // ionViewWillEnter() {
  //   let index = window.localStorage.getItem('current_select_tab');
  //   if (index !== '0') {
  //     this.tabs.select(parseInt(index));
  //   }
  // }

  onReword() {
    this.tabs.select(2);
  }

  onSelectChange(e) {
    if (e === '0') {
      window.localStorage.setItem('current_page_for_login', 'HomePage');
      window.localStorage.setItem('current_select_tab', '0');
      this.color = '#EB3841';
    } else if (e === '1') {
      window.localStorage.setItem('current_page_for_login', 'RecommentedPage');
      window.localStorage.setItem('current_select_tab', '1');
      this.color = '#EB3841';
    } else if (e === '2') {
      window.localStorage.setItem('current_page_for_login', 'RewardPage');
      window.localStorage.setItem('current_select_tab', '2');
      this.color = '#b3222f';
    } else if (e === '3') {
      window.localStorage.setItem('current_page_for_login', 'StatusPage');
      window.localStorage.setItem('current_select_tab', '3');
      this.color = '#EB3841';
    } else if (e === '4') {
      window.localStorage.setItem('current_page_for_login', 'MorePage');
      window.localStorage.setItem('current_select_tab', '4');
      this.color = '#EB3841';
    }
  }
}
