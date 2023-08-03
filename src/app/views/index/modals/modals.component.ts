import { Component, Input } from '@angular/core'

@Component({
    selector: 'app-modals',
    templateUrl: './modals.component.html',
    styleUrls: ['./modals.component.scss']
})
export class ModalsComponent {
    @Input() modal = {
        name: '',
        description: '',
        img: ''
    }
}
