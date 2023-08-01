import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {
  
  userData = {
    //@ts-ignore
    name: JSON.parse(localStorage.getItem('registeredUser'))?.name,
    //@ts-ignore
    email: JSON.parse(localStorage.getItem('registeredUser'))?.email,
    //@ts-ignore
    membership: JSON.parse(localStorage.getItem('registeredUser'))?.membership,
    //@ts-ignore
    memberSince: JSON.parse(localStorage.getItem('registeredUser'))?.memberSince,
  }

  debts = [
    {
      title: "Taxa de Inscrição",
      value: 19.99
    },

    {
      title: "Mensalidade - Agosto",
      value: 49.99
    },
  ]

  totalDebt = this.debts.reduce((acc, obj) => acc + obj.value, 0);

  ngOnInit(): void  {
    //@ts-ignore
    if(JSON.parse(localStorage.getItem('isLoggedIn')) === true) {
    }   else    {
        window.location.replace("/sign")
    }
  }
}
