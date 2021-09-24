import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { LocationResponse } from '../models/categories-model';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  city$ = new BehaviorSubject('');

  constructor(private http: HttpClient) {
  }

  getCity() {
    const success = (position: GeolocationPosition) => {
      const { latitude } = position.coords;
      const { longitude } = position.coords;

      this.http
        .get<LocationResponse>(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=ru`,
      )
        .subscribe((data) => {
          this.city$.next(data.city);
        });
    };
    navigator.geolocation.getCurrentPosition(success);
  }
}
