import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserRegistration } from 'src/app/models/userRegistration';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private baseUrl = environment.apiUrl + 'auth/register';
  constructor(private http: HttpClient) { }


  register(user: UserRegistration) {
    return this.http.post(this.baseUrl, user);
  }
}
