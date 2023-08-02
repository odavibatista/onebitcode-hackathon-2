import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent {
  @Input() service =    {
    name: '',
    surname: '',
    description: '',
    img: '',
    class: ''
  }
}
