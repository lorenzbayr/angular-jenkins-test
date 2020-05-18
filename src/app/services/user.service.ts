import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {User, UserCreateData} from '../models/User';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private BASE_URL = '/api/users';

  constructor(
    private http: HttpClient
  ) { }

  get(id: number): Observable<User> {
    return this.http.get<User>(`${this.BASE_URL}/${id}`);
  }

  create(createData: UserCreateData): Observable<User> {
    return this.http.post<User>(
      `${this.BASE_URL}`,
      createData
    );
  }
}
