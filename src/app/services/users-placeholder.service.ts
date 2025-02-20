import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class UsersPlaceholderService {
  // o HttpClient vai disponibilizar os métodos get, post, put, delete, e vai fazer a chamada http.
  // Não vamos mockar uma lista, vamos trazê-las a partir do servidor jsonplaceholder.typicode.com
  // devo fazer o import do HttpClientModule no app.module.ts para que eu possa utilizar o HttpClient
  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  getUsersPlaceholder(): Observable<any> {
    return this._httpClient.get('https://jsonplaceholder.typicode.com/users');
  }
}
