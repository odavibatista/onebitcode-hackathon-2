import { Component } from '@angular/core'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    currentlyLogged = localStorage.getItem('localStorageData')


    isLoggedIn: boolean = false

    setCredentials () {
        localStorage.setItem('isLoggedIn', JSON.stringify(this.isLoggedIn))

        if(localStorage.getItem('localStorageData') === null)   {
            localStorage.setItem("localStorageData", JSON.stringify(this.isLoggedIn))
        }
    }

    adjustNavbarOnResolution() {
        const threshold = 991
        const navLinks: any = document.querySelectorAll('.nav-link')
        
        if(window.innerWidth <= threshold) {
            //@ts-ignore
            navLinks.forEach(link => {
                link.dataset.bsToggle = 'collapse'
                link.dataset.bsTarget = '#navbarSupportedContent'
            });
        }
        else {
            //@ts-ignore
            navLinks.forEach(link => {
                delete link.dataset.bsToggle;
                delete link.dataset.bsTarget;
            });
        }

    }
}
