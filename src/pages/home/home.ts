import { Component } from '@angular/core';
import {AlertController, NavController } from 'ionic-angular';
import { RegistroPage } from '../registro/registro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  reg=RegistroPage;
  user='';
  pass='';

 

  usuarios=[{username:"", password:""} ]


  constructor(public navCtrl: NavController, public alertCtrl: AlertController,) {

  }


  registrar(){
    this.navCtrl.push(this.reg, {usuario:this.usuarios});
  }

  iniciar(){
    for( let i=0; i<this.usuarios.length; i++){

      if(this.user.length>0 && this.user == this.usuarios[i].username && this.pass==this.usuarios[i].password){

        const alert = this.alertCtrl.create({
          title: 'Bien!',
          subTitle: 'Inicio exitoso.',
          buttons: ['OK']
        });
        alert.present();
      }

      else{
        const alert = this.alertCtrl.create({
          title: 'Error!',
          subTitle: 'El usuario y contraseña no coinciden.',
          buttons: ['OK']
        });
        alert.present();
      }


    }
  }

}
