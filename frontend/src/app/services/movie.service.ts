import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PopularityMovies } from '../models/movie';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

getpopularityMovies(): Observable<PopularityMovies> {
  return this.http.get<PopularityMovies>(environment.url)
}


}
