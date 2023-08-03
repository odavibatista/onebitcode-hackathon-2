import { Component, Input } from '@angular/core'

@Component({
    selector: 'app-single-coach',
    templateUrl: './single-coach.component.html',
    styleUrls: ['./single-coach.component.scss']
})
export class SingleCoachComponent {
    @Input() coach = {
        name: '',
        role: '',
        career: '',
        img: ''
    }
}
