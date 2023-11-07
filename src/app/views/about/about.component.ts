import { Component } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  ngOnInit() {
    const options = {
      strings: [
        '&nbsp;Web Developer',
        '&nbsp;Designer',
        'n Angular Developer',
      ],
      typeSpeed: 100,
      backSpeed: 70,
      backDelay: 1000,
      loop: true
    };
    const typed = new Typed('.typed-element', options);
  }
}
