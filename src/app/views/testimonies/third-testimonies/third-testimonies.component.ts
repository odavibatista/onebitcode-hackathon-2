import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-third-testimonies',
  templateUrl: './third-testimonies.component.html',
  styleUrls: ['./third-testimonies.component.scss']
})
export class ThirdTestimoniesComponent {
  @Output() testimonies = [
    {
        relate: `Os treinos funcionais e a prática do fit dance da xHealth me ajudaram a sair do sedentarismo e melhorar a minha forma física após muito tempo parada. Hoje, consigo realizar melhor minhas atividades cotidianas, e também tenho o privilégio de ter formado ótimas amizades nos grupos e nas aulas do fit dance!`,
        name: 'Laura Cruz',
        img: '/assets/testimonies/testimony-7.jpg',
        career: 'ALUNA XHEALTH'
    },
    {
        relate: `Ter entrado na xHealth e receber o apoio imenso deles me ajudou bastante a melhorar no esporte e ter melhor disciplina. Antes, eu tinha dificuldades de elaborar a minha rotina e não tinha tanto caso para com meus exercícios, mas hoje consigo me organizar muito melhor e ter mais apreço pela atividade física. Só tenho a agradecer!`,
        name: "Marcel Silva",
        img: '/assets/testimonies/testimony-8.jpg',
        career: 'BRAZIL LAKERS BASKETBALL CLUB'
    },
    {
        relate: `As aulas de dança, treino intenso e condicionamento físico da xHealth foram o fator que me ajudou a disparar na carreira de bailarina. Graças ao acompanhamento de pessoas que amam o que fazem, posso hoje representar o Brasil nos campeonatos de ballet mundo afora com maestria, disciplina e 
        #garra.`,
        name: 'Natasha Vitzka',
        img: '/assets/testimonies/testimony-9.jpg',
        career: 'PETITE DANSE CHAMPION'
    }
]
}
