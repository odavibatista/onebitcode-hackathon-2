import { Component } from '@angular/core'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    changeToRegister() {
        //@ts-ignore
        document.querySelector('#register').style.display = 'flex'
        //@ts-ignore
        document.querySelector('#login').style.display = 'none'
    }

    turnToRedLogin() {
        //@ts-ignore
        document.querySelector('#email').style.borderColor = 'red'
        //@ts-ignore
        document.querySelector('#password').style.borderColor = 'red'
    }

    backToOriginalColorLogin() {
        //@ts-ignore
        document.querySelector('#loginEmail').style.borderBottomColor = '#2E1D1D'
        //@ts-ignore
        document.querySelector('#loginPassword').style.borderBottomColor = '#2E1D1D'
    }

    ngOnInit(): void {
        const loginForm: any = document.getElementById('loginForm')
        const emailError: any = document.getElementById('email-login-error')

        loginForm.addEventListener('submit', (ev: any) => {
            ev.preventDefault()

            const loginEmail: any = document.getElementById('emailLogin')
            const loginPassword: any = document.getElementById('passwordLogin')

            if (
                //@ts-ignore
                loginEmail.value === JSON.parse(localStorage.getItem('registeredUser'))?.email &&
                //@ts-ignore
                loginPassword.value === JSON.parse(localStorage.getItem('registeredUser'))?.password
            ) {
                localStorage.setItem('isLoggedIn', JSON.stringify(true))
                window.location.replace('/student')
            } else if (
                //@ts-ignore
                loginEmail.value !== JSON.parse(localStorage.getItem('registeredUser'))?.email ||
                //@ts-ignore
                loginPassword.value !== JSON.parse(localStorage.getItem('registeredUser'))?.password
            ) {
                emailError.innerText = 'E-mail ou senha incorretos!'
            }
        })
    }
}
