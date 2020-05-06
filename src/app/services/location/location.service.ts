import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { MapboxOutput } from 'src/app/models/location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private baseUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
  private dataTypes = '.json?country=BA&access_token=' + environment.mapbox;

  constructor(private http: HttpClient) { }

  search(address: string): Observable<MapboxOutput> {
    return this.http.get<MapboxOutput>(this.baseUrl + address + this.dataTypes);
  }
}
