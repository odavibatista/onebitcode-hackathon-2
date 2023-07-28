import { Component } from '@angular/core'

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
    contacts = [
        {
            src: '/assets/footer/fb.svg',
            alt: 'facebook'
        },

        {
            src: '/assets/footer/wp.svg',
            alt: 'whatsapp'
        },
        {
            src: '/assets/footer/email.svg',
            alt: 'email'
        },

        {
            src: '/assets/footer/ig.svg',
            alt: 'instagram'
        }
    ]
}
