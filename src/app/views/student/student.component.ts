import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {
  //@ts-ignore
  userName = JSON.parse(localStorage.getItem('registeredUser'))?.name
  ngOnInit(): void  {
    //@ts-ignore
    if(JSON.parse(localStorage.getItem('isLoggedIn')) === true) {
    }   else    {
        window.location.replace("/sign")
    }
  }
}
