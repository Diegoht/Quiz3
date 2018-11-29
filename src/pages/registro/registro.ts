import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {Storage} from '@ionic/storage';


/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  username="";
  password="";
  usuarios=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,  public storage: Storage) {
    this.usuarios=this.navParams.get("usuario");

   this.storage.keys()
     .then(Keys=> { 
        if(Keys.some(Key => Key== 'usuarios')) {
           this.storage.get('usuarios')
           .then(usuarios=> {
            this.usuarios=JSON.parse(usuarios);

      });
     }
   })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }


  registration(){

    if(this.username.length>0 && this.password.length>7){
      this.usuarios.push({
        username:this.username, 
        password:this.password
        });

        this.storage.set('usuarios', JSON.stringify(this.usuarios));

        
        this.username='';
        this.password='';

    this.navCtrl.pop();
  }

    else{
      const alert= this.alertCtrl.create(
        { title: "Oops!", subTitle: "La contraseña debe tener al menos 8 caracteres.", buttons: ['OK']
        });
        alert.present();
    }

  }

}