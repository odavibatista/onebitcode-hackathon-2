import { Component, Output } from '@angular/core'

@Component({
    selector: 'app-faq-section',
    templateUrl: './faq-section.component.html',
    styleUrls: ['./faq-section.component.scss']
})
export class FaqSectionComponent {
    @Output() questions = [
        {
            ask: 'O que está incluso',
            answer: 'Todas as mensalidades garantem o acesso do beneficiário às academias, seus espaços comuns e instrumentos necessários para realização de atividades físicas, com exceção dos espaços exclusivos para membros especiais, funcionários ou convidados.'
        },

        {
            ask: 'Há cobranças extras',
            answer: 'Não. O beneficiário apenas irá pagar por aqueles serviços que vier a fazer o uso enquanto estiver na academia. Serviços extras são contratados de modo avulso, e não incidem na cobrança comum das mensalidades.'
        },

        {
            ask: 'Quanto irei pagar',
            answer: 'O beneficiário irá pagar mensalmente uma taxa referente ao plano que o mesmo contratou por parte da xHealth, e está sujeito a pagar uma pequena taxa de matrícula quando realizar a sua inscrição, salvo havendo promoção de isenção da mesma.'
        },

        {
            ask: 'Como posso pagar',
            answer: 'O beneficiário receberá um e-mail com sua mensalidade a cada mês, mas também pode realizar o pagamento pela plataforma virtual da xHealth.'
        }
    ]
}
