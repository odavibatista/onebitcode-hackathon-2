import { Component, Output } from '@angular/core'

@Component({
    selector: 'app-privacy',
    templateUrl: './privacy.component.html',
    styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent {
    @Output() politics = [
        {
            title: 'Informações Coletadas',
            text: 'Nós coletamos informações fornecidas por você, como nome, endereço, endereço de e-mail e informações de pagamento. Essas informações são protegidas e usadas apenas para fins de cobrança. Além disso, coletamos informações técnicas, como o seu endereço IP, o tipo de navegador que você usa, o endereço web de referência e sites visitados, e qualquer informação fornecida em suas solicitações, serviços ou comentários.'
        },

        {
            title: 'Uso de Informações',
            text: 'Nossos serviços incluem usar as informações que coletamos para fins de cobrança ou para responder a pedidos, perguntas e reivindicações. Podemos compartilhar suas informações com nossos provedores de serviço para garantir o bom funcionamento do nosso sistema e que os serviços sejam oferecidos de maneira eficaz.'
        },

        {
            title: 'Segurança',
            text: 'Tomamos medidas para manter a confidencialidade e segurança das informações que você envia. Não armazenamos informações pessoais, exceto nos casos em que queremos oferecer recursos específicos ou serviços solicitados por nossos clientes.'
        }
    ]
}
