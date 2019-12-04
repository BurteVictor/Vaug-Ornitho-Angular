import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observation} from '../observation';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObservationService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'multipart/form-data'
    })
  };
  private baseUrl = 'http://localhost:8080/api';
  constructor(private http: HttpClient) {}
}
