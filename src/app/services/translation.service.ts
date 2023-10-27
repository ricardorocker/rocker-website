import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private idiomaSelecionado: string = 'english';
  private traducoes: any = {};

  constructor(private http: HttpClient) {
    this.carregarTraducoes();
  }

  public alterarIdioma(idioma: string): void {
    this.idiomaSelecionado = idioma;
    this.carregarTraducoes();
  }

  public obterTraducao(chave: string): string {
    return this.traducoes[chave] || chave;
  }

  private carregarTraducoes(): void {
    const arquivo =
      this.idiomaSelecionado === 'english'
        ? '/assets/en.json'
        : '/assets/po.json';

    this.http.get(arquivo).subscribe((data) => {
      this.traducoes = data;
    });
  }
}
