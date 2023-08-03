import { animate, query, style, transition, trigger } from '@angular/animations'

export const fader = trigger('routeAnimations', [
    transition('* <=> *', [
        query(':enter, :leave', [
            style({
                opacity: 0
            })
        ]),
        query(':enter', [animate('600ms ease', style({ opacity: 1 }))])
    ])
])
