import { Component, Output } from '@angular/core'

@Component({
    selector: 'app-terms',
    templateUrl: './terms.component.html',
    styleUrls: ['./terms.component.scss']
})
export class TermsComponent {
    @Output()   terms   =   [
        'Para se criar uma conta, é necessário ter 18 anos ou mais. Por isso, para acessar o website e realizar alterações nos dados, os usuários deverão confirmar sua maioridade e se responsabilizar por fornecer informações verdadeiras.',
        'Os preços e descontos oferecidos pelo estabelecimento estão sujeitos a alterações a qualquer momento.',
        'Os usuários autorizam a empresa a utilizar seus dados pessoais para envio de promoções, ofertas e outros fins.',
        'A empresa se reserva o direito de alterar os termos de uso a qualquer momento.',
        'Os usuários se obrigam a fornecer seus dados reais. Havendo falseabilidade ou irregularidade dos mesmos, a conta será suspensa e seus dados banidos',
        'Em caso de banimento ou falha, é possível solicitar recurso via atendimento online, via ticket por e-mail (suporte@xhealth.com)',
        'É expressamente proibido cadastrar informações de terceiros neste site sem sua devida tutela ou autorização. Em caso de imputação de dados de terceiros para compras no nome destes, as autoridades digitais serão acionadas.',
        'O usuário consente nas estipulações e distinções de cada um dos métodos de pagamento, estando sujeito às suas particularidades e tratos.',
        'As artes autorais não podem ser utilizadas comercialmente em outros sítios ou domínios da internet, sob pena de intimação judicial. Caso seja para divulgação, críticas ou notícias, este ato é permitido e aceito.'
    ]
}
