import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
    firstName = ''
    lastName = ''
    loginId = ''
    password = ''
    dob = ''
    address = ''

    signup(){

      console.log(this.firstName, ' ', this.lastName, ' ', this.loginId, ' ', this.password, ' ', this.dob, ' ', this.address)
    }

}
