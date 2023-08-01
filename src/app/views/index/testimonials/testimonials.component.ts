import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  @Output() testimonials = [

    {
      relate: `
        Antes de conhecer a xHealth, vivia buscando personals entre as academias mais simples, porém nenhum deles conseguia ser um bom guia para os meus planos profissionais no esporte.
        Graças à xHealth e o seu programa de mentoria atlética, consegui descobrir os melhores jeitos de ingressar no esporte e fazer a minha vida.
      `,
      name: 'Will Silveira',
      img: '/assets/index/testimonials/testimony-1.jpg',
      career: 'LIGHTWEIGHT CHAMPION'
    },

    {
      relate: `
        O acompanhamento fisioterapêutico da xHealth me ajudou a voltar pro jogo depois de uma grave lesão que sofri em campeonatos. Graças à equipe médica e esportiva dessa incrível academia, posso continuar o meu sonho de representar minha equipe e meus ideais dentro do estádio.
        Competência e qualidade espetaculares!
      `,
      name: "Ignacio della'Silva",
      img: '/assets/index/testimonials/testimony-2.jpg',
      career: 'BRAZIL LAKERS BASKETBALL CLUB'
    },

    {
      relate: `
      As aulas de dança, treino intenso e condicionamento físico da xHealth foram o fator que me ajudou a disparar na carreira de bailarina. Graças ao acompanhamento de pessoas que amam o que fazem, posso hoje representar o Brasil nos campeonatos de ballet mundo afora com maestria, disciplina e 
      #garra.
      `,
      name: 'NATASHA VITZKA',
      img: '/assets/index/testimonials/testimony-3.jpg',
      career: "BRAZIL’S PETITE DANSE CHAMPION"
    }
  ]
}
