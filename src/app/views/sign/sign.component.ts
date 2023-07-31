import { Component } from '@angular/core';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent {
  news = [
    'Campeonato de dança adiado para 15/09;',
    'Novos suplementos na loja física XHealth;',
    'Vagas para personal trainer abertas;',
    'Novos halteres na área VIP.'
  ]
}
