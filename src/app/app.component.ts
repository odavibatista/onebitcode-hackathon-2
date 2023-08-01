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


    ngOnInit(): void {
    const    isLoggedIn: boolean = false

        if(localStorage.getItem('isLoggedIn') === null)   {
            localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn))
        }

    }



}
