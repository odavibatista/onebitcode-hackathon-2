import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  ngOnInit(): void {
    function validateName(name: any){
      if(name.length < 3){
        /*Error for invalid name length */
        const err: any = new Error('Nome muito curto!')
        err.input = 'name'
        throw err
      }
    }

    function validateEmail(email: any) {
      if (!email.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/)) {
        /*Error for invalid email format */
          const err: any = new Error('Email inválido!')
          err.input = 'email'
          throw err
      }
    }

    function validatePassword(password: any) {
        if (
            password.length < 8 || 
            !password.match(/[a-z]/) || 
            !password.match(/[A-Z]/) || 
            !password.match(/[0-9]/) ||
            !password.match(/[^a-zA-Z0-9\s]/)
        ) {
            const err: any = new Error('Senha deve conter ao menos 8 caracteres, com pelo menos uma letra maiúscula, uma minúscula, um caractere especial, e um número.')
            err.input = 'password'
            throw err
        }
    }

    function resetFormStyles() {
        Object.entries(userInputs).forEach(([key, value]: any) => {
            value.classList.remove('success', 'error')
            //@ts-ignore
            document.querySelector(`#${key}-error`).textContent = ''
        })
    }

    const userInputs: any = {}

    userInputs.name = document.querySelector('#name')
    userInputs.email = document.querySelector('#email')
    userInputs.password = document.querySelector('#password')

    const registerForm: any = document.getElementById('registerForm')

    registerForm.addEventListener('submit', (ev: any) => {
        ev.preventDefault()
        resetFormStyles()
        try {
            validateName(userInputs.name.value)
            userInputs.name.classList.add('success')
            validateEmail(userInputs.email.value)
            userInputs.email.classList.add('success')
            validatePassword(userInputs.password.value)
            userInputs.password.classList.add('success')
        } catch (err: any) {
            userInputs[err.input].classList.add('error')
            //@ts-ignore
            document.querySelector(`#${err.input}-error`).textContent = err.message
        }
    })
  }
}
