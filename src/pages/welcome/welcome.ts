import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { FCM } from '@ionic-native/fcm';
import {Platform} from 'ionic-angular';
import { stringify } from '@angular/compiler/src/util';

/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {
  area: string;
  cidade: string;
  sexo: string;
  constructor(public navCtrl: NavController, private fcm: FCM, private platform: Platform) {
    this.platform = platform;
  }

  login() {
    this.navCtrl.push('LoginPage');
  }

  signup() {
    this.navCtrl.push('SignupPage');
  }

  setSubscription() {

    if (this.area != undefined) {
      this.fcm.unsubscribeFromTopic('marketing');
      this.fcm.unsubscribeFromTopic('ti');
      this.fcm.subscribeToTopic(this.area);
    }

    if (this.cidade != undefined) {
      this.fcm.unsubscribeFromTopic('rj');
      this.fcm.unsubscribeFromTopic('sp');
      this.fcm.unsubscribeFromTopic('bh');
      this.fcm.subscribeToTopic(this.cidade);
    }

    if (this.sexo != undefined) {
      this.fcm.unsubscribeFromTopic('homens');
      this.fcm.unsubscribeFromTopic('mulheres');
      this.fcm.subscribeToTopic(this.sexo);
    }
  
  }

  exitApp(){
    this.platform.exitApp();
 }
}
