import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-class',
  templateUrl: './single-class.component.html',
  styleUrls: ['./single-class.component.scss']
})
export class SingleClassComponent {
  @Input() class = {
    title: '',
    description: '',
    img: '',
    class: ''
  }
}
