import { Component, Input } from '@angular/core'

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent {
    @Input() membership = {
        name: '',
        monthly: '',
        annual: '',
        description: '',
        img: '',
        benefits: ['']
    }

    benefitChange   ()  {
        localStorage.setItem('membership', JSON.stringify(this.membership))
        localStorage.setItem('benefits', JSON.stringify(this.membership.benefits))
    }
}
