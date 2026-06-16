import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

    message = ''
    loginId = ''
    password = ''

    signIn(){
      if (this.loginId == 'admin' && this.password == 'admin'){
        this.message = ''
        console.log(this.loginId, ' ', this.password)
      }else{
        this.message = 'loginId and password invalid'
      }
        
    }
}
