import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../user';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  private baseUrl = 'http://localhost:8080/api';
  constructor(private http: HttpClient) {}

  getExpertContacts(): Observable<User []> {
    return this.http.get<User []>(`${this.baseUrl + '/experts'}`);
  }
}
