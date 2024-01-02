import { Component, OnInit } from '@angular/core'; 
import { ApiCallsService } from '../../services/api-calls.service';
import { RepositoryValuesService } from '../../services/repository-values.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private toastController: ToastController,
    private router: Router,
    private __services__: ApiCallsService, 
    private __repository__: RepositoryValuesService, ) { }

  ngOnInit() {
  }
  
  auth(event:any){ 
    event.preventDefault();
    const target = event.target; 
    const email = target.querySelector('#email').value; 
    const password = target.querySelector('#password').value;  

    this.__services__.LoginAuth( email, password ).subscribe((res) => {    
      if(Object.keys(res).length == 0){  
        this.presentToast('bottom');  
      }else{ 
        this.router.navigate(['/dashboard']);
      }
    }) 
  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Username or password is incorrect, Please try again.',
      duration: 1500,
      position: position,
    });

    await toast.present();
  }

}
