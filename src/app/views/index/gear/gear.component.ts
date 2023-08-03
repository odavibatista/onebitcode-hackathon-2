import { Component, Output } from '@angular/core'

@Component({
    selector: 'app-gear',
    templateUrl: './gear.component.html',
    styleUrls: ['./gear.component.scss']
})
export class GearComponent {
    @Output() coaches = [
        {
            name: 'Daniel Ferreira',
            role: 'Racing',
            img: '/assets/index/gear/coach-1.jpg'
        },

        {
            name: 'José Aldo',
            role: 'M. M. A.',
            img: '/assets/index/gear/coach-2.jpg'
        },

        {
            name: 'Fernando Reis',
            role: 'Bodybuilding',
            img: '/assets/index/gear/coach-3.jpg'
        }
    ]
}
