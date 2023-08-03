import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.scss']
})
export class ClassListComponent {
  @Output() classes = [
    {
      title: 'BIKE INDOOR',
      description: 'Prática de alto consumo de calorias, ideal para o aquecimento precedente aos treinos. Pedalar na bicicleta fixa aumenta a capacidade pulmonar e enriquece a oxigenação do sangue. Nossas bikes contam com controle de distância e contadores de tempo de uso, com cálculo de calorias gastas.',
      img: '/assets/classes/class-1.jpg',
      class: ''
    },

    {
      title: 'BODYBUILDING',
      description: 'Treinos intensivos, seguidos de várias séries de levantamento de peso, com treinos para a definição de diversos músculos da parte superior e inferior do corpo. Nossos equipamentos possuem alta qualidade, capazes de efetuar dos mais básicos aos mais complexos treinos de definição física.',
      img: '/assets/classes/class-2.jpg',
      class: 'reverse'
    },

    {
      title: 'LUTAS',
      description: 'Não se trata apenas de golpes, truques ou movimentos físicos, mas também de disciplina e domínio da própria força. Nossas aulas de lutas são focadas no Mixed Martial Arts, uma combinação de diversos estilos de lutas do mundo todo. Nossos profissionais extraem o melhor de cada arte marcial, e a poem num treino para lhe tornar um grande lutador.',
      img: '/assets/classes/class-3.jpg',
      class: ''
    },

    {
      title: 'HIGH INTENSITY INTERVAL TRAINING',
      description: 'Treinos revezados e de alta intensidade, focando na eficiência e no uso de diversos aparelhos para auxiliar na definição do porte físico, e aumento dos reflexos e da resistência cardíaca. Sendo uma modalidade de alto nível, é recomendada para pessoas mais experientes.',
      img: '/assets/classes/class-4.jpg',
      class: 'reverse'
    },

    {
      title: 'DANÇAS',
      description: 'Se você quer um espaço para aprender a se soltar nos ritmos de dança, a xHealth lhe proporciona um ensino divertido e descontraído. Além das danças modernas, contamos com o fit dance, uma modalidade de dança em grupo feita para alongar, perder peso, e se divertir na companhia de bons amigos!',
      img: '/assets/classes/class-5.jpg',
      class: ''
    },

    {
      title: 'JUMP TRAINING',
      description: 'Treinos de alto uso da resistência física, capazes de aumentar os reflexos, e garantir alta perda de peso de quem o pratica. O jump é uma modalidade ótima para pessoas que praticam esportes como futebol ou basquete, ensinando-as a ir mais alto e a ter mais força nas pernas para suas jogadas e lances.',
      img: '/assets/classes/class-6.jpg',
      class: 'reverse'
    },

    {
      title: 'FUNCTIONAL TRAINING',
      description: 'O functional training é um treino de nível médio, ideal para pessoas que queiram iniciar a vida de exercícios. O mesmo consiste em realizar vários movimentos similares ao que fazemos no dia a dia, porém com técnica e força para dominá-los ,melhor e dar maior vigor e resistência para nosso corpo, nos garantindo melhor rendimento no que fizermos.',
      img: '/assets/classes/class-7.jpg',
      class: ''
    },
  ]
}
