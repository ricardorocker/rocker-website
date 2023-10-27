import { Component } from '@angular/core';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  englishTranslation: boolean = true;

  constructor(public traducao: TranslationService) {}
  
  alterarIdioma() {
    this.traducao.alterarIdioma(
      this.englishTranslation ? 'portuguese' : 'english'
    );
    this.englishTranslation = !this.englishTranslation;
  }
}
