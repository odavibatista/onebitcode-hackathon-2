import { Component, Output } from '@angular/core'

@Component({
    selector: 'app-second-testimonies',
    templateUrl: './second-testimonies.component.html',
    styleUrls: ['./second-testimonies.component.scss']
})
export class SecondTestimoniesComponent {
    @Output() testimonies = [
        {
            relate: `Antes de conhecer a xHealth, vivia buscando personals entre as academias mais simples, porém nenhum deles conseguia ser um bom guia para os meus planos profissionais no esporte.
      Graças à xHealth e o seu programa de mentoria atlética, consegui descobrir os melhores jeitos de ingressar no esporte e fazer a minha vida.`,
            name: 'Will Silveira',
            img: '/assets/testimonies/testimony-4.jpg',
            career: 'LIGHTWEIGHT CHAMPION'
        },
        {
            relate: `O acompanhamento fisioterapêutico da xHealth me ajudou a voltar pro jogo depois de uma grave lesão que sofri em campeonatos. Graças à equipe médica e esportiva dessa incrível academia, posso continuar o meu sonho de representar minha equipe e meus ideais dentro do estádio.
    Competência e qualidade espetaculares`!,
            name: "Ignacio della'Silva",
            img: '/assets/testimonies/testimony-5.jpg',
            career: 'BRAZIL LAKERS BASKETBALL CLUB'
        },
        {
            relate: `Os treinos funcionais e de jump da xHealth foram um fator que me poupou meses, ou até mesmo anos de prática. Graças a essas modalidades, consigo hoje realizar saltos mais altos nas partidas de vôlei e ter melhor resistência e força para realizar minhas jogadas. Não tenho como descrever o quão bom é!`,
            name: 'Luna Loire',
            img: '/assets/testimonies/testimony-6.jpg',
            career: 'VOLLEYBALL CHAMPION'
        }
    ]
}
