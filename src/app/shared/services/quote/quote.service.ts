import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {QuoteResponse} from '@app/shared/models/quote';

const routes = {
  quote: (c: RandomQuoteContext) => `/jokes/random?category=${c.category}`
};

const baseUrl = '/jokes/';
const method = {
  search: 'search?query='
};

export interface RandomQuoteContext {
  // The quote's category: 'dev', 'explicit'...
  category: string;
}

@Injectable()
export class QuoteService {

  constructor(private httpClient: HttpClient) { }

  getRandomQuote(context: RandomQuoteContext): Observable<string> {
    return this.httpClient
      .cache()
      .get(routes.quote(context))
      .pipe(
        map((body: any) => body.value),
        catchError(() => of('Error, could not load joke :-('))
      );
  }

  searchQuote(param: string): Observable<QuoteResponse> {
    return this.httpClient
      .get(baseUrl + method.search + param)
      .pipe(map((responseList: any) => responseList));
  }

}
