import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ContatoService {

  private const URL_BUSCA_TODOS = `http://localhost:8080/contatos-ws`;

  constructor(private http: HttpClient) {}

  buscaTodos(): Promise<any> {
    return this.http.get(this.URL_BUSCA_TODOS)
                  .toPromise();
  }

}
