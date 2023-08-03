import { Component, Output } from '@angular/core'

@Component({
    selector: 'app-modals-section',
    templateUrl: './modals-section.component.html',
    styleUrls: ['./modals-section.component.scss']
})
export class ModalsSectionComponent {
    @Output() modals = [
        {
            name: 'Musculação',
            description:
                'Treinos intensivos e úteis para todos os portes físicos, perfeitos para definir um corpo saudável.',
            img: '/assets/index/modals/body-building.jpg'
        },

        {
            name: 'M . M . A .',
            description:
                'Disciplina, treino e garra que levam nossos alunos aos pódiums dos campeonatos.',
            img: '/assets/index/modals/mma.jpg'
        },

        {
            name: 'Functional Training',
            description:
                'Treinos para definir o corpo e aumentar a resistência e o vigor físico para atletas.',
            img: '/assets/index/modals/functional.jpg'
        },

        {
            name: 'H . I . I . T .',
            description:
                'Treinos intensivos e poderosos para levar o atleta ao limite e ao máximo de seu potencial.',
            img: '/assets/index/modals/hiit.jpg'
        },

        {
            name: 'Jump',
            description:
                'Exercícios fortes e planejados para a perda de peso e aumento da sua resistência cardíaca.',
            img: '/assets/index/modals/jump.jpg'
        },

        {
            name: 'Fit Dancing',
            description:
                'Danças para divertir e para por o corpo dentro da forma desejada, sempre em companhia de bons amigos.',
            img: '/assets/index/modals/dances.jpg'
        },

        {
            name: 'Bike Indoor',
            description:
                'Treinos para pré-aquecimento ou para prática em corridas de bike profissionais.',
            img: '/assets/index/modals/bike.jpg'
        }
    ]
}
