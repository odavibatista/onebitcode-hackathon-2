import { Component, Output } from '@angular/core'

@Component({
    selector: 'app-membership',
    templateUrl: './membership.component.html',
    styleUrls: ['./membership.component.scss']
})
export class MembershipComponent {
    @Output() memberships = [
        {
            name: 'Standard',
            monthly: '49.99',
            annual: '348.00',
            description: 'Acesso às academias e bônus de snacks fit mensais.',
            img: '/assets/memberships/plans/membership-1.jpg',
            benefits: ['Acesso às unidades xHealth;', 'Snacks ao fim do mês;', 'Acesso à plataforma.']
        },

        {
            name: 'X',
            monthly: '89.99',
            annual: '839.88',
            description: 'Participação em campeonatos da academia, e snacks quinzenais.',
            img: '/assets/memberships/plans/membership-2.jpg',
            benefits: ['Participação em campeonatos;', 'Snacks Quinzenais;', 'Benefícios do Standard.']
        },

        {
            name: 'VIP',
            monthly: '129.99',
            annual: '1200.00',
            description:
                'Acesso à area VIP, snacks semanais, ingressos para campeonatos, sorteios, e mais!',
            img: '/assets/memberships/plans/membership-3.jpg',
            benefits: ['Acesso à área VIP;', 'Snacks semanais;', 'Ingressos para torneios;', 'Sorteios;', 'Benefícios do Standard.']
        }
    ]
}
