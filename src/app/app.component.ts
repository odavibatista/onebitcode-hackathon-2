import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { fader } from './route.animations';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [
        fader
    ]
})


export class AppComponent {

    prepareRoute    (outlet: RouterOutlet)  {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    }

    title = 'x-health'

    isLoggedIn: boolean = false

    /* Testing the localstorage */
    setCredentials () {
        localStorage.setItem('isLoggedIn', JSON.stringify(this.isLoggedIn))

        if(localStorage.getItem('localStorageData') === null)   {
            localStorage.setItem("localStorageData", JSON.stringify(this.isLoggedIn))
        }
    }


}
