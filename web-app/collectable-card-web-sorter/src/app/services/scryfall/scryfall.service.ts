import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Observables
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ScryfallService {
  constructor(private http: HttpClient) {}

  baseurl = 'https://api.scryfall.com';

  getConfig() {
    return this.http.get<Config>(this.configUrl);
  }
}
