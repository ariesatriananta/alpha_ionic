import { Injectable } from '@angular/core';
import { HttpClient,  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Typescript custom enum for search types (optional)
export enum SearchType {
  all = '',
  movie = 'movie',
  series = 'series',
  episode = 'episode'
}

@Injectable({
  providedIn: 'root'
})
export class AvaService {
  url = 'http://www.omdbapi.com/';
  apiKey = 'c53f72ad'; // <-- Enter your own key here!
 
  /**
   * Constructor of the Service with Dependency Injection
   * @param http The standard Angular HttpClient to make requests
   */
  constructor(private http: HttpClient) { }
 
  /**
  * Get data from the OmdbApi 
  * map the result to return only the results that we need
  * 
  * @param {string} title Search Term
  * @param {SearchType} type movie, series, episode or empty
  * @returns Observable with the search results
  */
  searchData(title: string, type: SearchType): Observable<any> {
    return this.http.get(`${this.url}?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`).pipe(
      map(results => results['Search'])
    );
  }

  cariData(): Observable<any> {
    var urlthis = `http://10.10.10.98/cis/web/apps/api`;
    // var urlthis = `http://www.omdbapi.com/?s=spider&type=&apikey=c53f72ad`;
    // console.log(urlthis);
    // var alphas:string[]; 
    // alphas = ["1","2","3","4"] 
    // console.log(alphas); 
    return this.http.get(urlthis).pipe(
      map(results => results)
    );
  }

  // getArray(): Observable<any> {
  //   return this.http.get(`http://10.10.10.98/cis/web/apps/api`).pipe(
  //     map(data => data.map(v => v))
  //   );

  //   return this.http.post("/api/url", postObject, options)
  //       .pipe(map(data => data.map(v => new Thing(v))));
  // }
 
  /**
  * Get the detailed information for an ID using the "i" parameter
  * 
  * @param {string} id imdbID to retrieve information
  * @returns Observable with detailed information
  */
  getDetails(id) {
    return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`);
  }
}
