import { Component, Output } from '@angular/core'

@Component({
    selector: 'app-services',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
    @Output() services = [
        {
            name: 'Acompanhamento ',
            surname: 'Com Personal',
            description:
                'Tenha apoio para saber o quê treinar e como treinar! Nossos personal trainers são especializados em definição de porte físico e irão lhe guiar do aquecimento ao descanso profissionalmente.',
            img: '/assets/memberships/services/service-1.jpg',
            class: ''
        },
        {
            name: '',
            surname: 'Avaliação Física',
            description:
                'Necessita saber como o seu corpo está funcionando? Nossos profissionais realizam análises e avaliações  físicas para ver como está o seu porte físico, e quais são as necessidades que se possa ter para seus futuros treinos.',
            img: '/assets/memberships/services/service-2.jpg',
            class: 'reverse'
        },
        {
            name: 'Fisioterapeuta & ',
            surname: 'Ortopedista',
            description:
                'Saiba como preparar melhor seu aquecimento para prevenir lesões, ou venha receber o suporte de nossos profissionais para poder voltar ao jogo após alguma lesão sofrida.',
            img: '/assets/memberships/services/service-3.jpg',
            class: ''
        },
        {
            name: 'Psico',
            surname: 'Terapia',
            description:
                'Nossos profissionais em psicoterapia não apenas irão lhe ajudar com disciplina para sua rotina e vida de treinos, mas também irão oferecer suporte para que você possa lidar com os seus problemas do dia a dia.',
            img: '/assets/memberships/services/service-4.jpg',
            class: 'reverse'
        }
    ]
}
