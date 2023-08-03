import { Component } from '@angular/core'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    //@ts-ignore
    currentlyLogged = JSON.parse(localStorage.getItem('isLoggedIn'))
    //@ts-ignore
    userName = JSON.parse(localStorage.getItem('registeredUser'))?.name

    isLoggedIn: boolean = false

    adjustNavbarOnResolution() {
        const threshold = 991
        const navLinks: any = document.querySelectorAll('.nav-link')

        if (window.innerWidth <= threshold) {
            //@ts-ignore
            navLinks.forEach((link) => {
                link.dataset.bsToggle = 'collapse'
                link.dataset.bsTarget = '#navbarSupportedContent'
            })
        } else {
            //@ts-ignore
            navLinks.forEach((link) => {
                delete link.dataset.bsToggle
                delete link.dataset.bsTarget
            })
        }
    }
}
