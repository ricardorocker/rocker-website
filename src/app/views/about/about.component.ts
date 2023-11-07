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
        'Web Developer',
        'Angular Developer',
        'Designer'],
      typeSpeed: 100,
      backSpeed: 70,
      backDelay: 1000,
      loop: true
    };
    const typed = new Typed('.typed-element', options);
  }
}
