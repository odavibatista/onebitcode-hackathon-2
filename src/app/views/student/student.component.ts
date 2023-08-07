import { Component } from '@angular/core'

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
        membership: JSON.parse(localStorage.getItem('membership'))?.name,
        //@ts-ignore
        memberSince: JSON.parse(localStorage.getItem('registeredUser'))?.memberSince
    }

    disconnectUser() {
        localStorage.setItem('isLoggedIn', JSON.stringify(false))
        window.location.reload()
    }
    
    //@ts-ignore
    benefits = JSON.parse(localStorage.getItem('benefits'))

    date = new Date()

    debts = [
        {
            title: 'Taxa de Inscrição',
            expiration: `15/${this.date.getMonth() + 1}/${this.date.getFullYear()}`,
            value: 19.99
        },

        {
            title: 'Mensalidade - Agosto',
            expiration: `31/${this.date.getMonth() + 1}/${this.date.getFullYear()}`,
            //@ts-ignore
            value: Number(JSON.parse(localStorage.getItem('membership'))?.monthly)
        }
    ]

    totalDebt = this.debts.reduce((acc, obj) => acc + obj.value, 0).toFixed(2)

    ngOnInit(): void {
    const standardBenefits = ['Acesso às unidades xHealth;', 'Snacks ao fim do mês;', 'Acesso à plataforma.']
        //@ts-ignore
        if (localStorage.getItem('benefits') === null) {
            localStorage.setItem('benefits', JSON.stringify(standardBenefits))
        }

        //@ts-ignore
        if (JSON.parse(localStorage.getItem('isLoggedIn')) === true) {
        } else {
            window.location.replace('/sign')
        }
    }
}
