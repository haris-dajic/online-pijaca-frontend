import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DefaultDataService {

  private baseUrl = environment.apiUrl + 'default/data/location';

  constructor(private http: HttpClient) { }

  getAllLocations() {
    return this.http.get(this.baseUrl);
  }
}
