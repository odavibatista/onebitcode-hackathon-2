import { Component, Output } from '@angular/core'

@Component({
    selector: 'app-coaches-list',
    templateUrl: './coaches-list.component.html',
    styleUrls: ['./coaches-list.component.scss']
})
export class CoachesListComponent {
    @Output() coaches = [
        {
            name: 'José Aldo',
            role: 'Professor de M. M. A.',
            career: 'WEC Champion',
            img: '/assets/coaches/coach-1.jpg'
        },

        {
            name: 'Fernando Reis',
            role: 'Tutor de bodybuilding',
            career: 'Weightlifting champion',
            img: '/assets/coaches/coach-2.jpg'
        },

        {
            name: 'Mayra Aguiar',
            role: 'Professora de judô',
            career: 'Judo Champion',
            img: '/assets/coaches/coach-3.jpg'
        },

        {
            name: 'Thiago Braz',
            role: 'Professor de Jump',
            career: 'Athletics Champion',
            img: '/assets/coaches/coach-4.jpg'
        },

        {
            name: 'Danielzinho',
            role: 'Instrutor Functional',
            career: 'Marathon runner',
            img: '/assets/coaches/coach-5.jpg'
        }
    ]
}
