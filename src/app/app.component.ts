import { Component } from '@angular/core'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
