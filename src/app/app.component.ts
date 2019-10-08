import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

class Contato {
  id: number;
  nome: string;
  fone: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ultimoId = 3;
  contato = new Contato();

  contatos = [
    { id: 1, nome: 'Antonio Lopes', fone: '3232-4455' },
    { id: 2, nome: 'Francisco Candido', fone: '3322-1010' },
    { id: 3, nome: 'Alfredo Nunes', fone: '4125-9658' }
  ];

  salvar(formContato: NgForm) {
    this.contato.id = ++this.ultimoId;
    this.contato.nome = formContato.value.nome;
    this.contato.fone = formContato.value.fone;

    this.contatos.push(this.contato);

    this.contato = new Contato();
  }

  editar(id: number) {
    for (const c of this.contatos) {
      console.log(c);
    }
  }

}
