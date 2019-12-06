import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observation} from '../observation';
import {Injectable} from '@angular/core';
import {Dates} from '../Dates';

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
  getObservationList(): Observable<Observation []> {
    return this.http.get<Observation []>(`${this.baseUrl + '/observations'}`);
  }
  getSingleObs(id: number): Observable<Observation> {
    return this.http.get<Observation>(`${this.baseUrl + '/observations/' + id}`);
  }
  deleteObs(id: number): Observable<Observation> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.delete<Observation>(this.baseUrl + '/observations/' + id, httpOptions);
  }
  getSingleObseDates(id: number): Observable<Dates[]> {
    return this.http.get<Dates[]>(`${this.baseUrl + '/observations/' + id + '/dates'}`);
  }
}
