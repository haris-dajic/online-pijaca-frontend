import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = environment.apiUrl + 'auth/login'
  constructor(private http: HttpClient) { }

  login(user) {
    return this.http.post(this.baseUrl, user);
  }

}
