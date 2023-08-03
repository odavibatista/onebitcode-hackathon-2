import { Component, Output } from '@angular/core'

@Component({
    selector: 'app-first-testimonies',
    templateUrl: './first-testimonies.component.html',
    styleUrls: ['./first-testimonies.component.scss']
})
export class FirstTestimoniesComponent {
    @Output() testimonies = [
        {
            relate: `Os serviços de avaliação física e acompanhamento da xHealth me ajudaram imensamente no processo de perder peso e entender melhor quais treinos deveria fazer para melhorar minha rotina e disiciplina comigo mesma. Uso e recomendo imensamente!`,
            name: 'Sofia Garcia',
            img: '/assets/testimonies/testimony-1.jpg',
            career: 'FEMALE CATEOGRY'
        },

        {
            relate: `Não tenho palavras para descrever o quão incrível é a academia xHealth para nós, fisiculturistas! Os aparelhos de musculação são simplesmente os melhores, proporcionando exercícios precisos e eficientes para esculpir o corpo. Além disso, a xHealth nos dá um espaço dedicado para treinar poses e coreografias, o que faz toda a diferença no palco!`,
            name: 'Rafael Brandão',
            img: '/assets/testimonies/testimony-2.jpg',
            career: 'OPEN CATEGORY'
        },

        {
            relate: `A xHealth tem tudo aquilo que um atleta precisa se deseja ingressar no mundo profissional. As metodologias de ensino e revezamento de reinos, somados com a estrutura impecável, tornam ela o melhor lugar para se formar como um esportista profissional.`,
            name: 'Gabriel Zancanelli',
            img: '/assets/testimonies/testimony-3.jpg',
            career: 'CLASSIC PHYSIQUE'
        }
    ]
}
