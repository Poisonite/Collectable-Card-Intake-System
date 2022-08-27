// Core+
import { Injectable } from '@angular/core';

// HTTP Info
import { HttpClient } from '@angular/common/http';

// Observables
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

// Models
import { Card } from 'src/app/models/scryfall.model';

@Injectable({
  providedIn: 'root',
})
export class ScryfallService {
  constructor(private http: HttpClient) {}

  private baseurl = 'https://api.scryfall.com';

  searchCards(searchQuery: string) {
    const configUrl = `${this.baseurl}/REST-OF-URL-HERE/${searchQuery}`;
    return this.http.get<Card[]>(configUrl);
  }
}
