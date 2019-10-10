import { ContatoService } from './contato.service';
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

  contatos = [];

  constructor(private service: ContatoService) {}

  salvar(formContato: NgForm) {
    /*
    this.contato.id = ++this.ultimoId;
    this.contato.nome = formContato.value.nome;
    this.contato.fone = formContato.value.fone;

    this.contatos.push(this.contato);

    this.contato = new Contato();
    */
    console.log(this.service.buscaTodos());
  }

  editar(id: number) {
    for (const c of this.contatos) {
      console.log(c);
    }
  }

}
