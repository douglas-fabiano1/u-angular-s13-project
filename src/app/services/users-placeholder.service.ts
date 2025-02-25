import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersPlaceholderListResponse } from '../types/users-placeholder-list-response';

@Injectable({
  providedIn: 'root',
})
export class UsersPlaceholderService {
  // o HttpClient vai disponibilizar os métodos get, post, put, delete, e vai fazer a chamada http.
  // Não vamos mockar uma lista, vamos trazê-las a partir do servidor jsonplaceholder.typicode.com
  // devo fazer o import do HttpClientModule no app.module.ts para que eu possa utilizar o HttpClient
  constructor(private readonly _httpClient: HttpClient) {}

  // tipar de acordo com o que é retornado do endpoint
  getUsersPlaceholder(): Observable<UsersPlaceholderListResponse> {
    return this._httpClient.get<UsersPlaceholderListResponse>(
      'https://jsonplaceholder.typicode.com/users'
    );
  }
}
