import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  changeToRegister  ()  {
    //@ts-ignore
    document.querySelector('#register').style.display = 'flex'
    //@ts-ignore
    document.querySelector('#login').style.display = 'none'
  }
}
